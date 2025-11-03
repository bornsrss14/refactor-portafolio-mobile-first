import { useState } from "react";
import CardContent from "./CardContent";
import DataProjects from "../utils/DataProjects";
import DefaultCard from "./DefaultCard";
import { useThemeT } from "../contexts/ThemeContext";

const tabs = [
  { id: 1001, label: "MUBI::", className: "blue" },
  { id: 1002, label: "Notary", className: "purple" },
  { id: 1003, label: "Pokedex", className: "green" },
  { id: 1004, label: "Maps", className: "orange" },
  { id: 1005, label: "Split bills", className: "yellow" },
  { id: 1006, label: "To-Do", className: "green" },
];

const PortfolioFolderLayout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = DataProjects.find((item) => item.id === activeTab);

  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <>
      {/* <div className="card">
        <div className="cubierta-blanca"></div>

        <h2 className="font-sub-titles">
          {activeTab ? activeItem.projectTitle : "Personal projects"}
        </h2>
        <button className="card-white"></button>

        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`tab ${tab.className} ${
                activeTab === tab.id ? "estiloBotonActivo" : "estiloBotonNormal"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

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
      </div> */}
      <div className="folder-f">
        <div style={{ background: theme.folderBack }} className="folder-back-f">
          <div
            style={{ background: theme.folderBack }}
            className="cubierta-blanca"
          ></div>
          <div className="tabs">
            {tabs.map((tab, index) => (
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

                  {/*  {DataProjects.map((item) =>
                item.id === activeTab ? (
                  <CardContent key={item.id} item={item} />
                ) : null
              )} */}
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioFolderLayout;
