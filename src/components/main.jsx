
import { useState } from "react";
import webLanguages from "../data/language-web";

function TabComponent() {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className="container mt-5">

            <div className="mb-4" role="group">
                {webLanguages.map((lang, index) => (
                    <button key={index} className={`btn mx-2 btn-primary ${index === activeCard ? "btn-warning" : "bnt-primary"}  `} onClick={() => setActiveCard(index)}>
                        {lang.name}
                    </button>
                ))}
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title">{webLanguages[activeCard].name}</h3>
                    <p className="card-text">{webLanguages[activeCard].description}</p>
                </div>
            </div>
        </div>
    );
}

export default TabComponent;