import { useEffect, useState } from "react";
import VideoTutorial from "../core/VideoTutorial.js";
import TutorialLinks from "../core/TutorialLinks.js";
import ScreenShotsMobile from "../core/ScreenShotsMobile.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";

export const CardContent = ({ item }) => {
  const [mediaStatus, setMediaStatus] = useState({
    videoLoaded: false,
    firstScreenLoaded: false,
    secondScreenLoaded: false,
    videoError: false,
    firstScreenError: false,
    secondScreenError: false,
  });
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  console.log("Es mobil:", isMobile);
  console.log("Es tableta:", isTablet);
  console.log("Es desktop:", isDesktop);
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

  console.log(item, "mi item (×_×)");
  return (
    <>
      {/* decido si isMobile entonces grid-view-mobile*/}
      {/* decido si isDesktop entonces grid-card-content-desktop */}
      {isMobile && (
        <div className="grid-card-content-desktop">
          <div>
            <VideoTutorial
              mediaStatus={mediaStatus}
              item={item}
            ></VideoTutorial>
            <div>
              <TutorialLinks item={item}></TutorialLinks>
            </div>
          </div>
          {/* esta clase debe cambiar según el dispositivo — ↓↓ */}
          {/*  <div className="container-ss">
            <ScreenShotsMobile
              mediaStatus={mediaStatus}
              item={item}
            ></ScreenShotsMobile>
            <div>
              <TutorialLinks item={item}></TutorialLinks>
            </div>
          </div> */}
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
