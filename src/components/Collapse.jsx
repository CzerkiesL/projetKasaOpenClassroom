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
        <section className="collapse-container">
            <div className="collapse-header">
                <h2>{title}</h2>
                <button
                    className={display ? "active" : null}
                    onClick={handleClick}
                ></button>
            </div>
            <div className={`collapse-text ${display && "active"}`}>
                {textIsList ? (
                    <ul className={display ? "active" : null}>
                        {text.map((elem) => {
                            return <li key={elem}>{elem}</li>;
                        })}
                    </ul>
                ) : (
                    <p className={display ? "active" : null}>{text}</p>
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
