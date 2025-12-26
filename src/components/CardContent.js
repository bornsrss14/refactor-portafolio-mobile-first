import { useEffect, useState } from "react";
import VideoTutorial from "../core/VideoTutorial.js";
import TutorialLinks from "../core/TutorialLinks.js";
import ScreenShotsMobile from "../core/ScreenShotsMobile.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import CardDetailsAbout from "../core/CardDetailsAbout.js";
import { useThemeT } from "../contexts/ThemeContext.js";

export const CardContent = ({ item }) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  const [mediaStatus, setMediaStatus] = useState({
    videoLoaded: false,
    firstScreenLoaded: false,
    secondScreenLoaded: false,
    videoError: false,
    firstScreenError: false,
    secondScreenError: false,
  });
  const { isMobile, isDesktop } = useBreakpoint();
  //Precargando los medios
  useEffect(() => {
    const loadMedia = async () => {
      // ✔️ Verifico que mis url existan
      try {
        const videoUrl = item?.objeto?.url_video ?? item?.url_video;
        const firstScreenUrl =
          item?.objeto?.firstScreenShot ?? item?.firstScreenShot;
        const secondScreenUrl =
          item?.objeto?.secondScreenShot ?? item?.secondScreenShot;

        if (!videoUrl || !firstScreenUrl || !secondScreenUrl) {
          console.log("Missing media urls (╯︵╰,)");
          setMediaStatus({
            videoError: !videoUrl,
            firstScreenError: !firstScreenUrl,
            secondScreenError: !secondScreenUrl,
            videoLoaded: !!videoUrl,
            firstScreenLoaded: !!firstScreenUrl,
            secondScreenLoaded: !!secondScreenUrl,
          });
          return;
        }
        if (isMobile) {
          setMediaStatus((prev) => ({ ...prev, videoLoaded: true }));
        } else {
          //precargarVideo
          const video = document.createElement("video");
          video.src = videoUrl;
          video.preload = "metadata";

          const videoTimeout = setTimeout(() => {
            setMediaStatus((prev) => ({ ...prev, videoLoaded: true }));
          }, 3000); // Timeout de 3 segundos

          /* video.onloadeddata = () =>
            setMediaStatus((prev) => ({ ...prev, videoLoaded: true }));
          video.onerror = () =>
            setMediaStatus((prev) => ({ ...prev, videoError: true })); */
          video.onloadeddata = () => {
            clearTimeout(videoTimeout);
            setMediaStatus((prev) => ({ ...prev, videoLoaded: true }));
          };
          video.onerror = () => {
            clearTimeout(videoTimeout);
            setMediaStatus((prev) => ({ ...prev, videoError: true }));
          };

          video.load(); // ES importante: forzar la carga
        }

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
          loadScreenShot(
            item?.objeto?.firstScreenShot ?? item?.firstScreenShot,
            "firstScreenLoaded"
          ), // Corregido
          loadScreenShot(
            item?.objeto?.secondScreenShot ?? item?.secondScreenShot,
            "secondScreenLoaded"
          ), // Corregido
        ]);
      } catch (error) {
        console.log("Error loading screenshots", error);
      }
    };
    loadMedia();
  }, [isMobile, item]);

  return (
    <>
      {/* decido si isMobile entonces grid-view-mobile*/}
      {/* decido si isDesktop entonces grid-card-content-desktop */}
      {isMobile && (
        <div className="grid-card-content-desktop">
          {/* item={item?.objeto ?? item} */}
          {item?.id === 1001 && (
            <div>
              <p style={{ color: theme.txt, fontWeight: "bold" }}>
                {item?.objeto?.projectTitle ?? item?.projectTitle}
              </p>

              <div>
                <div className="container-video-tutorial">
                  <p
                    style={{ color: theme.txt, fontWeight: "400" }}
                    className="para-about"
                  >
                    {item?.objeto?.briefDescription}
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
                        src={item?.objeto.url_video}
                        controls
                        loop
                        playsInline
                        preload="metadata"
                        muted
                        style={{ opacity: mediaStatus?.videoLoaded ? 1 : 0 }}
                      >
                        <source src={item?.objeto.url_video} type="video/mp4" />
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
              <div>
                <TutorialLinks item={item?.objeto ?? item}></TutorialLinks>
              </div>
            </div>
          )}
          {item?.id === 1002 && (
            <div className="container-ss">
              <ScreenShotsMobile
                mediaStatus={mediaStatus}
                item={item?.objeto ?? item}
              ></ScreenShotsMobile>
            </div>
          )}
          {item?.id === 1003 && (
            <CardDetailsAbout item={item?.objeto ?? item}></CardDetailsAbout>
          )}
        </div>
      )}
      {isDesktop && (
        <div className="grid-card-content-desktop">
          <div>
            <VideoTutorial
              mediaStatus={mediaStatus}
              item={item}
            ></VideoTutorial>
          </div>
          {/* esta clase debe cambiar según el dispositivo — ↓↓ */}
          <div className="container-ss">
            <ScreenShotsMobile
              mediaStatus={mediaStatus}
              item={item}
            ></ScreenShotsMobile>
            <div>
              <TutorialLinks item={item}></TutorialLinks>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardContent;
