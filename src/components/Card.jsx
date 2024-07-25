import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import '../styles/card.scss'

function Card(props) {
    const { id, title, cover } = props;

    return (
        <Link className="card-link" to={`/logement/${id}`}>
            <img src={cover} alt="" />
            <h2>{title}</h2>
        </Link>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;
