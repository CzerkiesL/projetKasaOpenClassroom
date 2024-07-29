import PropTypes from "prop-types";

import "../styles/tag.scss";

function Tag({ text }) {
    return (
        <div className="tag">
            <p className="tag-name">{text}</p>
        </div>
    );
}

Tag.propTypes = {
    text: PropTypes.string,
};

export default Tag;
