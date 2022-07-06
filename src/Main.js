import react, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

const Main = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        for (let i = 1; i < 10; i++) {
            let newCharacters = [];

            fetch(`https://akabab.github.io/starwars-api/api/id/${i}.json`)
            .then((res) => res.json())
            .then((json) => {
                const char = {
                    name: json.name,
                    img: json.image,
                }
                console.log(char);
                
                newCharacters = newCharacters.concat(char);
            });

            setCharacters(newCharacters);
            console.log(characters);
        }

        
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