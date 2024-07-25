import PropTypes from "prop-types";

import "../styles/banner.scss";

function Banner({ title, background }) {
    return (
        <div className="banner-container">
            <div className="title-container">
                {title !== "" ? <h1>{title}</h1> : null}
            </div>
            <img src={background} alt="image de paysage" />
        </div>
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    background: PropTypes.string.isRequired,
};

export default Banner;
