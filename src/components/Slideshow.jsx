import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import "../styles/slidshow.scss";

function Slideshow({ pictures, alt }) {
    const [currentPicture, setCurrentPicture] = useState(0);
    const [animRunning, setAnimRunning] = useState(false);
    const [direction, setDirection] = useState("");

    const possibleDirection = ["left", "right"];

    useEffect(() => {
        if (animRunning === true) {
            setTimeout(() => {
                setAnimRunning(false);
                setDirection("");
            }, 200);
        }
    }, [animRunning]);

    const manyPics = pictures.length > 1;

    function previousPics() {
        setAnimRunning(true);
        setDirection(possibleDirection[0]);
        if (currentPicture != 0) {
            setCurrentPicture(currentPicture - 1);
        } else {
            setCurrentPicture(pictures.length - 1);
        }
    }

    function nextPics() {
        setAnimRunning(true);
        setDirection(possibleDirection[1]);
        if (currentPicture != pictures.length - 1) {
            setCurrentPicture(currentPicture + 1);
        } else {
            setCurrentPicture(0);
        }
    }

    return (
        <section id="slideshow">
            {manyPics && (
                <div className="slideshow__btn-container">
                    <button
                        onClick={previousPics}
                        className="slideshow__btn-container--btn btn-previous"
                    ></button>
                    <div className="slideshow__btn-container--indicator">
                        <p>{currentPicture + 1 + " / " + pictures.length}</p>
                    </div>
                    <button
                        onClick={nextPics}
                        className="slideshow__btn-container--btn btn-next"
                    ></button>
                </div>
            )}
            <img
                className={`slideshow__picture ${
                    animRunning ? direction : null
                }`}
                src={pictures[currentPicture]}
                alt={alt}
            />
        </section>
    );
}

Slideshow.propTypes = {
    pictures: PropTypes.array.isRequired,
    alt: PropTypes.string,
};

export default Slideshow;
