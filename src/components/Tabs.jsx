import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      {/* Botones de los tabs */}
      <div className="tabs-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? "tab active" : "tab"}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido del tab activo */}
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
