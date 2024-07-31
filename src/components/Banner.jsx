import PropTypes from "prop-types";

import "../styles/banner.scss";

function Banner({ title = "", background }) {
    return (
        <section id="banner">
            <div className="banner__title-container">
                {title !== "" ? (
                    <h1 className="banner__title-container--title">{title}</h1>
                ) : null}
            </div>
            <img
                className="banner__background"
                src={background}
                alt="image de paysage"
            />
        </section>
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    background: PropTypes.string.isRequired,
};

export default Banner;
