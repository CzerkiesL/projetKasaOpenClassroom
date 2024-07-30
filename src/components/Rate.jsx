import PropTypes from "prop-types";

import StarActive from "../assets/images/star-active.png";
import StarInactive from "../assets/images/star-inactive.png";

import '../styles/rate.scss'

function Rate({ star }) {
    const rate = parseInt(star);
    let rateStar = [];

    for (let i = 0; i < 5; i++) {
        if (i + 1 < rate) {
            rateStar.push(StarActive);
        } else {
            rateStar.push(StarInactive);
        }
    }

    return (
        <div className="rating">
            {rateStar.map((element, index) => {
                return <img className="rating__star" key={index} src={element} />;
            })}
        </div>
    );
}

Rate.propTypes = {
    star: PropTypes.string,
};

export default Rate;
