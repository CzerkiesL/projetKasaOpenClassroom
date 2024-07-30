import { Link } from "react-router-dom";

import "../styles/error.scss";

export default function Error() {
    return (
        <main id="error">
            <h1 className="error__tite">404</h1>
            <h2 className="error__text">Oups! La pagesque vous demandez n&apos;existe pas</h2>
            <Link className="error__link" to="/">Retourner sur la page d&apos;accueil</Link>
        </main>
    );
}
