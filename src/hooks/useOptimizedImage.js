import { useState, useEffect, useRef, useCallback } from "react";

/*utilizaré un Set para el caché global para imagenes ya precargadas y evitar el proceso de 
doble renderizado */

const imageCache = new Set();
export function useOptimizedImage(src, options = {}) {
  const { threshold = 0.1, rootMargin = "100px", placeholder = null } = options;
  const [state, setState] = useState({
    src: placeholder,
    isLoading: true,
    hasError: false,
  });

  const imgRef = useRef(null);
  const observerRef = useRef(null);

  /*Utilizo una función para cargar la imagen */
  const loadImage = useCallback(async () => {
    if (!src) return;
    /*Si existe dentro del caché, voy a saltar la evaluación de carga */
    if (imageCache.has(src)) {
      setState({ src, isLoading: false, hasError: false });
      return;
    }
    setState((prev) => ({ ...prev, isLoading: true }));
    const img = new Image();
    img.src = src;

    const startTime = performance.now();

    try {
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      const loadTime = performance.now() - startTime;

      /*Vamos hacer un pequeño delay en caso de que la carga fuera maás rapida (<100m)*/
      if (loadTime < 100) {
        await new Promise((r) => {
          setTimeout(r, 100 - loadTime);
        });
      }

      imageCache.add(src);
      setState({ src, isLoading: false, hasError: false });
    } catch (error) {
      console.error("Error loading image", error);
      setState((prev) => ({ ...prev, isLoading: false, hasError: true }));
    }
  }, [src]);

  /*Mantengo mi observador para lazy load */
  const setObserverRef = useCallback(
    (node) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (!node) return;
      imgRef.current = node;
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadImage();
            observerRef.current.disconnect();
          }
        },
        { threshold, rootMargin }
      );
      observerRef.current.observe(node); // 🔹 importante
    },
    [loadImage, threshold, rootMargin]
  );

  //Al desmontar ocurre:

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { ref: setObserverRef, ...state };
}

export function OptimizedImage({
  src,
  placeholder,
  alt = "",
  className = "",
  skeletonClassName = "",
  errorFallback = "Error al cargar imagen",
}) {
  const {
    ref,
    src: imageSrc,
    isLoading,
    hasError,
  } = useOptimizedImage(src, {
    placeholder,
    rootMargin: "200px",
  });

  if (hasError) {
    return (
      <div
        aria-label={alt || errorFallback}
        role="img"
        className={`optimized-image error ${className}`}
      >
        <span className="optimized-image__error-text">{errorFallback}</span>
      </div>
    );
  }
  return (
    <div ref={ref} className={`optimized-image ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className={`optimized-image__img ${isLoading ? "loading" : "loaded"}`}
        loading="lazy"
        decoding="async"
      />

      {isLoading && (
        <div className={`optimized-image__skeleton ${skeletonClassName}`}></div>
      )}
    </div>
  );
}
