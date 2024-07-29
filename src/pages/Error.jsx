import { Link } from "react-router-dom";

import "../styles/error.scss";

export default function Error() {
    return (
        <main className="error-container">
            <h1>404</h1>
            <h2>Oups! La pagesque vous demandez n&apos;existe pas</h2>
            <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </main>
    );
}
