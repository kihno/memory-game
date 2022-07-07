import { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const [clicked, setClicked] = useState([]);
    const [currentScore, setCurrent] = useState(0);
    const [bestScore, setBest] = useState(0)

    useEffect(() => {
        fetch("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json")
        .then((res) => res.json())
        .then((json) => {
            const mainCharacters = [0, 1, 2, 3, 4, 9, 12, 13, 18, 19, 20, 33];

            for (let i = 0; i < mainCharacters.length; i++) {
                console.log(mainCharacters[i]);
                const char = {
                    name: json[mainCharacters[i]].name,
                    img: json[mainCharacters[i]].image,
                }

                setCharacters(prevState => [...prevState, char]);
            }
        });
    }, []);

    const handleClick = (e) => {
        const name = e.target.name;

        if (clicked.includes(name)) {
            setClicked([]);
            checkScore();
        } else {
            setClicked(prevState => [...prevState, name]);
            setCurrent(currentScore + 1);
        }

        shuffle(characters);
    }

    const checkScore = () =>{
        if (currentScore < bestScore) {
            setCurrent(0);
        } else {
            setBest(currentScore);
            setCurrent(0);
        }
    }

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    return (
        <div id="main">
            <Score currentScore={currentScore} bestScore={bestScore} />
            <div id="cardGrid">
                {characters.map((char) => {
                    return <Card name={char.name} image={char.img} handleClick={handleClick} key={characters.indexOf(char)}/>
                })}
            </div>
        </div>
    )
}

export default Main;