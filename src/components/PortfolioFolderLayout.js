import { useState } from "react";
import CardContent from "./CardContent";
import DataProjects from "../utils/DataProjects";
import DefaultCard from "./DefaultCard";
import { useThemeT } from "../contexts/ThemeContext";
import { useBreakpoint } from "../hooks/useBreakpoint";

const tabs = [
  { id: 1001, label: "MUBI::", className: "blue" },
  { id: 1002, label: "Notary", className: "purple" },
  { id: 1003, label: "Pokedex", className: "green" },
  { id: 1004, label: "Maps", className: "orange" },
  { id: 1005, label: "Split bills", className: "yellow" },
  { id: 1006, label: "To-Do", className: "green" },
];

const tabsMobile = [
  { id: 1001, label: "My Preview", className: "blue" },
  { id: 1002, label: "Mobile", className: "purple" },
  { id: 1003, label: "Info", className: "yellow" },
];

const PortfolioFolderLayout = ({ itemObject }) => {
  const itemObjectRender = itemObject;
  const { isMobile, isDesktop } = useBreakpoint();
  const [activeTab, setActiveTab] = useState(1001);
  const [activeMobileTab, setActiveMobileTab] = useState(1001);
  const activeItem = DataProjects.find((item) => item.id === activeTab);

  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;

  const tabMap = {
    1001: itemObjectRender?.tab_one,
    1002: itemObjectRender?.tab_two,
    1003: itemObjectRender?.tab_three,
  };
  const currentItem = tabMap[activeMobileTab] ?? null;
  return (
    <>
      {isMobile && (
        <div className="folder-f">
          <div
            style={{ background: theme.folderBack }}
            className="folder-back-f"
          >
            <div
              style={{ background: theme.folderBack }}
              className="cubierta-blanca-mobile"
            ></div>
            <div>
              {(isMobile && tabsMobile).map((tab, index) => (
                <button
                  key={tab.id}
                  className={`tab ${tab.className} ${
                    activeMobileTab === tab.id
                      ? "estiloBotonActivo"
                      : "estiloBotonNormal"
                  }`}
                  onClick={() => setActiveMobileTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              style={{ background: theme.folderFront }}
              className="folder-front-f"
            >
              <div className="content">
                {/* 🛠️ TODO: Renderizar por secciones */}
                {
                  <>
                    {currentItem ? (
                      <CardContent key={currentItem.id} item={currentItem} />
                    ) : (
                      <p>Ros</p>
                    )}
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      )}
      {isDesktop && (
        <div className="folder-f">
          <div
            style={{ background: theme.folderBack }}
            className="folder-back-f"
          >
            <div
              style={{ background: theme.folderBack }}
              className="cubierta-blanca"
            ></div>
            <div className="tabs">
              {(isMobile ? tabsMobile : tabs).map((tab, index) => (
                <button
                  key={tab.id}
                  className={`tab ${tab.className} ${
                    activeTab === tab.id
                      ? "estiloBotonActivo"
                      : "estiloBotonNormal"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              style={{ background: theme.folderFront }}
              className="folder-front-f"
            >
              <div className="content">
                {
                  <>
                    {activeItem ? (
                      <CardContent key={activeItem.id} item={activeItem} />
                    ) : (
                      <DefaultCard />
                    )}
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioFolderLayout;
