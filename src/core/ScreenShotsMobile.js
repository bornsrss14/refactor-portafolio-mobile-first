import { useThemeT } from "../contexts/ThemeContext";

export const ScreenShotsMobile = ({ mediaStatus, item }) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <div>
      <div>
        <p style={{ color: theme.txt }}>Enfoque mobile-first</p>
        <div className="div-ss-tutorial">
          {/* Imágenes con estado de carga */}

          <div className="image-wrapper">
            <img
              className={`img-ss ${
                mediaStatus?.firstScreenLoaded ? "loaded" : "loading"
              }`}
              src={item.firstScreenShot}
              alt="first-ss"
            />

            {!mediaStatus?.firstScreenLoaded &&
              !mediaStatus?.firstScreenError && (
                <div className="image-loading-state">
                  <div className="loading-spinner"></div>
                </div>
              )}

            {mediaStatus?.firstScreenError && (
              <div className="image-error-state">Imagen no disponible</div>
            )}
          </div>

          {/*  second*/}

          <div className="image-wrapper">
            <img
              className={`img-ss ${
                mediaStatus?.secondScreenLoaded ? "loaded" : "loading"
              }`}
              src={item?.secondScreenShot}
              alt="first-ss"
            />

            {!mediaStatus?.secondScreenLoaded &&
              !mediaStatus?.secondScreenError && (
                <div className="image-loading-state">
                  <div className="loading-spinner"></div>
                </div>
              )}

            {mediaStatus?.secondScreenError && ( // Cambiado de firstImageError a secondScreenError
              <div className="image-error-state">Imagen no disponible</div>
            )}
          </div>
        </div>
      </div>
      <p style={{ marginBottom: ".5rem", color: theme.txt, fontWeight: "300" }}>
        Providing a seamless experience across mobile devices and smaller
        screen.
      </p>
    </div>
  );
};
export default ScreenShotsMobile;
