import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../styles/card.scss";

function Card(props) {
    const { id, title, cover } = props;

    return (
        <Link id="card" to={`/logement/${id}`}>
            <img className="card__img" src={cover} alt="" />
            <h2 className="card__title">{title}</h2>
        </Link>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;
