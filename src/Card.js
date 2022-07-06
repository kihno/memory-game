import react, { useState, useEffect } from 'react';

const Card = (props) => {

    return (
        <div className="card">
            <img src={props.image} className="charImage"></img>
            <div className="charName">{props.name}</div>
        </div>
    )
}

export default Card;