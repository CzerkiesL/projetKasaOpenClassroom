import PropTypes from "prop-types";
import { useState } from "react";

import "../styles/collapse.scss";

function Collapse(props) {
    const { title, text } = props;
    const [display, setDisplay] = useState(false);

    const textIsList = typeof text == "object";
    
    function handleClick() {
        setDisplay(!display);
    }

    return (
        <section id="collapse">
            <div className="collapse__header">
                <h2 className="collapse__header--title">{title}</h2>
                <button
                    className={`collapse__header--btn ${display && "active"}`}
                    onClick={handleClick}
                ></button>
            </div>
            <div className={`collapse__text-container ${display && "active"}`}>
                {textIsList ? (
                    <ul
                        className={`collapse__text-container--text ${
                            display && "active"
                        }`}
                    >
                        {text.map((elem) => {
                            return <li key={elem}>{elem}</li>;
                        })}
                    </ul>
                ) : (
                    <p
                        className={`collapse__text-container--text ${
                            display && "active"
                        }`}
                    >
                        {text}
                    </p>
                )}
            </div>
        </section>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired,
    ]),
};

export default Collapse;
