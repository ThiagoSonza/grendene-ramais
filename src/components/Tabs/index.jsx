import "./style.css"
import React from "react";

function Tabs({ tabs, currentTab, setCurrentTab }) {

    return (

        <div className="tabs">
            <ol className="tab-list">
                {tabs.map((item, index) => {

                    return (
                        <li
                            key={index}
                            className={`tab-list-item ${currentTab === item.name ? "tab-list-active" : ""}`}
                            onClick={() => setCurrentTab(item.name)}
                        >
                            {item.label}
                        </li>
                    )

                })}
            </ol>
        </div>

    )

}

export default Tabs