import Property from "../assets/data/property.json";
import { useParams, Navigate } from "react-router-dom";

import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";

import "../styles/logement.scss";

export default function Logement() {
    const { idLogement } = useParams();

    function getLogement() {
        let logement;
        Property.forEach((current) => {
            if (current.id == idLogement) {
                logement = current;
            }
        });
        return logement;
    }
    const logement = getLogement();

    if (logement === undefined) {
        return <Navigate to="/error" />;
    }
    return (
        <main id="logement">
            <Slideshow pictures={logement.pictures} alt={logement.title} />
            <section className="logement__info-container">
                <div className="logement__info-container--where">
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <ul className="tag-container">
                        {logement.tags.map((tag, index) => {
                            return (
                                <li key={tag + index}>
                                    <Tag text={tag} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="logement__info-container--who">
                    <div className="host-container">
                        <p>{logement.host.name}</p>
                        <img
                            src={logement.host.picture}
                            alt={`photo de ${logement.host.name}`}
                        />
                    </div>
                    <Rate star={logement.rating} />
                </div>
                <div className="logement__info-container--what">
                    <Collapse title="Description" text={logement.description} />
                    <Collapse title="Équipement" text={logement.equipments} />
                </div>
            </section>
        </main>
    );
}
