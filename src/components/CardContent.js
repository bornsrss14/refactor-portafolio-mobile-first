import { useEffect, useState } from "react";

export const CardContent = ({ item }) => {
  const [mediaStatus, setMediaStatus] = useState({
    videoLoaded: false,
    firstScreenLoaded: false,
    secondScreenLoaded: false,
    videoError: false,
    firstScreenError: false,
    secondScreenError: false,
  });
  //Precargando los medios
  useEffect(() => {
    const loadMedia = async () => {
      try {
        //precargarVideo
        const video = document.createElement("video");
        video.src = item.url_video;
        video.onloadeddata = () =>
          setMediaStatus((prev) => ({ ...prev, videoLoaded: true }));
        video.onerror = () =>
          setMediaStatus((prev) => ({ ...prev, videoError: true }));

        //ahora con las imagenes
        const loadScreenShot = (url, key) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
              setMediaStatus((prev) => ({ ...prev, [key]: true }));
              resolve();
            };
            img.onerror = () => {
              setMediaStatus((prev) => ({ ...prev, [`${key}Error`]: true }));
              resolve();
            };
          });
        };
        await Promise.all([
          loadScreenShot(item.firstScreenShot, "firstScreenLoaded"), // Corregido
          loadScreenShot(item.secondScreenShot, "secondScreenLoaded"), // Corregido
        ]);
      } catch (error) {
        console.log("Error loading screenshots", error);
      }
    };
    loadMedia();
  }, [item]);

  return (
    <>
      <div className="grid-card-content-desktop">
        <div className="container-video-tutorial">
          <p className="para-about">{item.briefDescription}</p>

          {/* video con estado de carga */}
          <div className="video-container">
            {mediaStatus.videoError ? (
              <div className="media-error">Video no disponible</div>
            ) : (
              <video
                width="100%"
                height="auto"
                autoPlay
                muted
                loop
                style={{ opacity: mediaStatus.videoLoaded ? 1 : 0 }}
              >
                <source src={item.url_video} type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
            )}
            {!mediaStatus.videoLoaded && !mediaStatus.videoError && (
              <div className="media-loading">
                <div className="loading-spinner"></div>
              </div>
            )}
          </div>
        </div>

        <div className="container-ss">
          <div>
            <p>Enfoque mobile-first</p>
            <div className="div-ss-tutorial">
              {/* Imágenes con estado de carga */}

              <div className="image-wrapper">
                <img
                  className={`img-ss ${
                    mediaStatus.firstScreenLoaded ? "loaded" : "loading"
                  }`}
                  src={item.firstScreenShot}
                  alt="first-ss"
                />

                {!mediaStatus.firstScreenLoaded &&
                  !mediaStatus.firstScreenError && (
                    <div className="image-loading-state">
                      <div className="loading-spinner"></div>
                    </div>
                  )}

                {mediaStatus.firstScreenError && (
                  <div className="image-error-state">Imagen no disponible</div>
                )}
              </div>

              {/*  second*/}

              <div className="image-wrapper">
                <img
                  className={`img-ss ${
                    mediaStatus.secondScreenLoaded ? "loaded" : "loading"
                  }`}
                  src={item.secondScreenShot}
                  alt="first-ss"
                />

                {!mediaStatus.secondScreenLoaded &&
                  !mediaStatus.secondScreenError && (
                    <div className="image-loading-state">
                      <div className="loading-spinner"></div>
                    </div>
                  )}

                {mediaStatus.secondScreenError && ( // Cambiado de firstImageError a secondScreenError
                  <div className="image-error-state">Imagen no disponible</div>
                )}
              </div>
            </div>
          </div>
          <p>
            Garantizando una experiencia óptima en dispositivos móviles y
            pantallas pequeñas.
          </p>
          <div className="tutorial-links">
            <a target="_blank" rel="noreferrer" href={item.liveDemo}>
              🌐Live demo here
            </a>
            <a target="_blank" rel="noreferrer" href={item.gitRepo}>
              {" "}
              😺Git repo here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContent;
