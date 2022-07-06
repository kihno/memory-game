import react, { useState, useEffect } from 'react';

const Card = (props) => {

    return (
        <div className="card">
            <div className="charImage">{props.img}</div>
            <div className="charName">{props.name}</div>
        </div>
    )
}

export default Card;