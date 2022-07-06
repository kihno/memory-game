import react, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

const Main = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json`)
        .then((res) => res.json())
        .then((json) => {
            for (let i = 0; i < 12; i++) {
                const char = {
                    name: json[i].name,
                    img: json[i].image,
                }

                setCharacters(prevState => [...prevState, char]);
            }
        });
    }, []);

    return (
        <div id="main">
            <Score />
            <div id="cardGrid">
                {characters.map((char) => {
                    return <Card name={char.name} image={char.img} key={characters.indexOf(char)}/>
                })}
            </div>
        </div>
    )
}

export default Main;