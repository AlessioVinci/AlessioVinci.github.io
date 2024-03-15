
type CardProps = {
    imgSrc: string;
    title: string;
    description: string;
}

function Card(props: CardProps) {
    const imgUrl = new URL("./assets/" + props.imgSrc, import.meta.url).href;
    return (
        <div className="card">
            <img className="card-image" src={imgUrl} alt="logo image"></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-description">{props.description}</p>
            <button className="card-button">More</button>
        </div>
    );
}

export default Card