import Masonry from "masonry-layout";
import { useEffect } from "react";
import { useRef } from "react";
import imagesLoaded from "imagesloaded";
export const MasonryGallery = () => {
  const gridRef = useRef(null);
  const galleryImages = [
    "https://i.pinimg.com/736x/7b/67/11/7b6711acaad0042ce5a8ab24d0684c3d.jpg",
    "https://i.pinimg.com/736x/eb/7f/9e/eb7f9e6cf71d20f4c7aa6ee6f02e8092.jpg",
    "https://i.pinimg.com/736x/a5/1c/fc/a51cfc42df9bb47eea01c46a68f6f42e.jpg",
    "https://i.pinimg.com/1200x/1e/af/d0/1eafd06cf2a163e76ed35575bf4648f6.jpg",
    "https://i.pinimg.com/736x/5b/2a/17/5b2a1784ef29e59b727f62dbb07c4b88.jpg",
    "https://i.pinimg.com/736x/0e/01/66/0e016693ebaac200237d5ce9abef0dd2.jpg",
    "https://i.pinimg.com/1200x/46/e9/5b/46e95b74a41f50a0a9524ea2874a115f.jpg",
    "https://media.foodandtravel.mx/wp-content/uploads/2017/02/barriochino-1.jpg",
  ];
  useEffect(() => {
    if (gridRef.current) {
      const msnry = new Masonry(gridRef.current, {
        itemSelector: ".masonry-item",
        columnWidth: ".masonry-sizer",
        gutter: 16,
        percentPosition: true,
      });
      imagesLoaded(gridRef.current, () => {
        msnry.layout();
      });
    }
  }, []);
  return (
    <div ref={gridRef} className="masonry-grid">
      <div className="masonry-sizer"></div>
      {galleryImages.map((src, i) => {
        return (
          <div key={i} className="masonry-item">
            <img src={src} alt={`img-${i}`} />
          </div>
        );
      })}
    </div>
  );
};

export default MasonryGallery;
