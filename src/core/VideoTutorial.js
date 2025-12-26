import { useThemeT } from "../contexts/ThemeContext";

export const VideoTutorial = ({ item, mediaStatus }) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <div>
      <div className="container-video-tutorial">
        <p
          style={{ color: theme.txt, fontWeight: "400" }}
          className="para-about"
        >
          {item?.briefDescription}
        </p>

        {/* video con estado de carga */}
        <div className="video-container">
          {mediaStatus?.videoError ? (
            <div className="media-error">
              This video isn't available ¯\_(ツ)_/¯
            </div>
          ) : (
            <video
              width="100%"
              height="auto"
              autoPlay
              src={item.url_video}
              controls
              loop
              playsInline
              preload="metadata"
              muted
              style={{ opacity: mediaStatus?.videoLoaded ? 1 : 0 }}
            >
              <source src={item?.url_video} type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
          )}
          {!mediaStatus?.videoLoaded && !mediaStatus.videoError && (
            <div className="media-loading">
              <div className="loading-spinner"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;
