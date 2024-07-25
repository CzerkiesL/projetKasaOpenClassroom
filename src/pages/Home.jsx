import PropertyList from "../assets/data/property.json";
import bannerBackground from "../assets/images/BGhome.png";

import Banner from "../components/Banner";
import Card from "../components/Card";

import "../styles/Home.scss";

export default function Home() {
    return (
        <main>
            <Banner
                title={"Chez vous, partout et ailleurs"}
                background={bannerBackground}
            />

            <section className="card-container">
                <ul className="card-list">
                    {PropertyList.map((property) => {
                        return (
                            <li key={property.id}>
                                <Card
                                    id={property.id}
                                    title={property.title}
                                    cover={property.cover}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}
