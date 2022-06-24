import { useState, useEffect } from "react";
import words from "./words.json";
import { Row } from "./Row";
const WORD_LENGTH = 5;

function App() {
  const [todaysWord, setTodaysWord] = useState("");
  // const todaysWorldSplit = new Array(1).fill(todaysWord.split(""))
  const [guesses, setGuesses] = useState(new Array (6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  
  useEffect(() => {
    if (sessionStorage.getItem("todaysWord") === null) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setTodaysWord(randomWord);
      sessionStorage.setItem("todaysWord", randomWord);
    } else {
      setTodaysWord(sessionStorage.getItem("todaysWord"));
    }
  }, []);

  const handleGuess = () => {

  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (e.key === "Enter") {
        // if enter key is pressed and currentguess length is equal to WORD_LENGTH
        if (currentGuess.length === WORD_LENGTH) {
          // if current guess is equal to todays word
          if (currentGuess === todaysWord) {
            // set guesses to todays word
            setGuesses(todaysWord.split(""));
            console.log("you guessed it");
            // set current guess to empty string
            setCurrentGuess("");
            // set guess count to 0
            setGuessCount(0);
          } else {
            // if current guess is not equal to todays word
            // set current guess to empty string
            setCurrentGuess("");
            // increment guess count
            setGuessCount(guessCount + 1);
          }
        }
      } else {
        setCurrentGuess(currentGuess + e.key);
        if (currentGuess.length === WORD_LENGTH && guessCount !== 6) {
          // setGuesses(guesses.concat(currentGuess));
          guesses.splice(guessCount, 1, currentGuess);
          setCurrentGuess("");
          setGuessCount(guessCount + 1);
        }
      }
    }



    window.addEventListener("keydown", handleKeyDown);

    return () => {
     window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentGuess, guesses, guessCount])
    console.log("current guess =>", currentGuess, guesses);
    console.log(guessCount);

  return (
    <div className="h-screen w-screen bg-[#121213]">
      <div className="w-full h-full">
        <div className="flex flex-row justify-center w-full border-b-2">
          <h1 className="text-white text-6xl font-medium">Wordle: {todaysWord}</h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full mt-20">
          {guesses.map((guess, index) => {
            const isCurrentGuess = index === guesses.findIndex(val => val == null);
            return <Row key={index} guess={isCurrentGuess ? currentGuess : guess ?? ""} wordLength={WORD_LENGTH} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
