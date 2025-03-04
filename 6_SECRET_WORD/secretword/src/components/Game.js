import './Game.css';

const Game = ({verifiyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifiyLetter}>Finalizar o jogo</button>
    </div>
  )
}

export default Game
