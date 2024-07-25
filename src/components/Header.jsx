import LogoXL from "../assets/images/logoXL.png";
import LogoXS from "../assets/images/logoXS.png";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/header.scss";

export default function Header() {
    const location = useLocation();
    const [display, setDisplay] = useState("desktop");

    window.addEventListener("resize", () => {
        if (window.innerWidth < 750) {
            setDisplay("mobile");
        } else {
            setDisplay("desktop");
        }
    });

    return (
        <header>
            <Link to="/">
                <img
                    src={display === "desktop" ? LogoXL : LogoXS}
                    alt="logo kasa"
                />
            </Link>

            <nav>
                <Link
                    className={location.pathname === "/" ? "active" : null}
                    to="/"
                >
                    {display === "desktop" ? "Accueil" : "ACCUEIL"}
                </Link>
                <Link
                    className={location.pathname === "/about" ? "active" : null}
                    to="/about"
                >
                    {display === "desktop" ? "A Propos" : "A PROPOS"}
                </Link>
            </nav>
        </header>
    );
}
