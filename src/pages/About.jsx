import AboutCollapse from "../assets/data/aboutCollapse.json";
import bannerBackground from "../assets/images/BGaPropos.png";

import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

export default function About() {
    return (
        <main>
            <Banner background={bannerBackground} />
            <ul>
                {AboutCollapse.map((element, id) => {
                    return (
                        <li key={element.title + id}>
                            <Collapse
                                title={element.title}
                                text={element.text}
                            />
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
