export const VideoTutorial = ({ item, mediaStatus }) => {
  return (
    <div>
      <div className="container-video-tutorial">
        <p className="para-about">{item?.briefDescription}</p>

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
