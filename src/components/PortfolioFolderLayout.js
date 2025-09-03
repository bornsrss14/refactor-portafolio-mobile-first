import { useState } from "react";
import CardContent from "./CardContent";
import DataProjects from "../utils/DataProjects";
import DefaultCard from "./DefaultCard";

const tabs = [
  { id: 1001, label: "Pokedex", className: "pink" },
  { id: 1002, label: "Notary", className: "pink" },
  { id: 1003, label: "MUBI::", className: "pink" },
  { id: 1004, label: "Maps", className: "pink" },
  { id: 1005, label: "Split bills", className: "pink" },
  { id: 1006, label: "To-Do", className: "pink" },
];

const PortfolioFolderLayout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = DataProjects.find((item) => item.id === activeTab);

  return (
    <>
      <div className="card">
        <div className="cubierta-blanca"></div>
        <button className="card-white"></button>

        <h2 className="font-sub-titles">
          {activeTab ? activeItem.projectTitle : "Ros's Classified File."}
        </h2>
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

              {/*  {DataProjects.map((item) =>
                item.id === activeTab ? (
                  <CardContent key={item.id} item={item} />
                ) : null
              )} */}
            </>
          }
        </div>
      </div>
    </>
  );
};

export default PortfolioFolderLayout;
