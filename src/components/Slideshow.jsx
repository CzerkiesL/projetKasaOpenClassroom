import PropTypes from "prop-types";
import { useState } from "react";

import "../styles/slidshow.scss";

function Slideshow({ pictures, alt }) {
    const [currentPicture, setCurrentPicture] = useState(0);

    const manyPics = pictures.length > 1;

    function previousPics() {
        if (currentPicture != 0) {
            setCurrentPicture(currentPicture - 1);
        } else {
            setCurrentPicture(pictures.length - 1);
        }
    }

    function nextPics() {
        if (currentPicture != pictures.length - 1) {
            setCurrentPicture(currentPicture + 1);
        } else {
            setCurrentPicture(0);
        }
    }

    return (
        <section className="slide-container">
            {manyPics && (
                <div className="slide-btn-container">
                    <button
                        onClick={previousPics}
                        className="slide-btn previous"
                    ></button>
                    <div className="slide-infos">
                        <p>{currentPicture + 1 + " / " + pictures.length}</p>
                    </div>
                    <button
                        onClick={nextPics}
                        className="slide-btn next"
                    ></button>
                </div>
            )}
            <img src={pictures[currentPicture]} alt={alt} />
        </section>
    );
}

Slideshow.propTypes = {
    pictures: PropTypes.array.isRequired,
    alt: PropTypes.string,
};

export default Slideshow;
