//CSS
import './App.css';

// React
import {useCallback, useEffect, useState} from 'react';

//data
import { wordsList } from './data/words';

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages =[
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"},
];


function App() {

  const [gameStage, setGamesStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedword, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);


    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return{word, category};
  }

  //console.log(words);


  // start the secret word game
  const startGame = () => {

    // pick word and pick category
    const {word, category} = pickWordAndCategory();

    //create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());
 
    console.log(word, category);

    //create an array of letters
    //let wordLetters = word.split("");
    console.log(wordLetters);


    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGamesStage(stages[1].name);
  }

  // process the letter input

  const verifiyLetter = () => {
    setGamesStage(stages[2].name)
  }

  // restart

  const retry = ()  => {
    setGamesStage(stages[0].name)
  }

  return (
    <div className="App">

    {gameStage === 'start' && <StartScreen  startGame={startGame} />}
    {gameStage === 'game' && <Game verifiyLetter={verifiyLetter} />}
    {gameStage === 'end' && <GameOver retry={retry} />}

    
    </div>

    
  );
}

export default App;
