
const Score = (props) => {

    return (
        <div id="score">
            <div id="scoreContainer">
                <div id="currentScore">Current: {props.currentScore}</div>
                <div id="bestScore">Best: {props.bestScore}</div>
            </div>
        </div>
    )
}

export default Score;