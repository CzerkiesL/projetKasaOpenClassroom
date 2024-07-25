import PropTypes from "prop-types";
import { useState } from "react";

import "../styles/collapse.scss";

function Collapse(props) {
    const { title, text } = props;
    const { display, setDisplay } = useState(false);

    return (
        <section className="collapse-container">
            <div className="collapse-header">
                <h2>{title}</h2>
                <button></button>
            </div>
            <div className="collapse-text">
                <p>{text}</p>
            </div>
        </section>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Collapse;
