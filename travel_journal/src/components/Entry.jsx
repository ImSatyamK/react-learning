export default function Entry(props){
    return (
        <entry>
            <div className="destination-img-div">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="destination-info-div">
                <img src="./marker.png" alt="map marker icon" />
                <span>{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">veiw on google maps</a>
                <h3>{props.title}</h3>
                <h5>{props.dates}</h5>
                <p>{props.text}</p>
            </div>
        </entry>
    )
}