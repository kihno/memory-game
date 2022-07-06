
const Card = (props) => {

    return (
        <div className="card" name={props.name} onClick={props.handleClick}>
            <img src={props.image} className="charImage" name={props.name}></img>
            <div className="charName" name={props.name}>{props.name}</div>
        </div>
    )
}

export default Card;