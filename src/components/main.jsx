import { useState } from "react";
import webLanguages from "../data/language-web";

function TabComponent() {
    const [activeCard, setActiveCard] = useState(1);

    return (
        <div className="container mt-5">


            <div className="mb-4" role="group">
                {webLanguages.map((lang) => (
                    <button
                        key={lang.id}
                        className={`btn mx-2 ${lang.id === activeCard ? "btn-warning" : "btn-primary"}`}
                        onClick={() => { setActiveCard(lang.id) }}
                    >
                        {lang.name}
                    </button>
                ))}
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    {webLanguages.map((lang) => (
                        lang.id === activeCard && (
                            <div key={lang.id}>
                                <h3 className="card-title">{lang.name}</h3>
                                <p className="card-text">{lang.description}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TabComponent;
