import { useState, useEffect } from "react";
import "@animxyz/core";
import words from "./words.json";
import { Row } from "./components/Row";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { WinningConfetti } from "./components/Confetti";
const WORD_LENGTH = 5;

function App() {
  const [todaysWord, setTodaysWord] = useState("");
  const todaysWordSplit = new Array(1).fill(todaysWord.split(""));
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [checkWord, setCheckWord] = useState(false);
  const [guessesSplit, setGuessesSplit] = useState([]);
  const [correctGuess, setCorrectGuess] = useState(false);

  const [incorrectLetters, setIncorrectLetters] = useState([]);

  useEffect(() => {
    // checking to see if a word is already picked
    // if not, set a word in session storage
    if (sessionStorage.getItem("todaysWord") === null) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setTodaysWord(randomWord);
      sessionStorage.setItem("todaysWord", randomWord);
    } else {
      setTodaysWord(sessionStorage.getItem("todaysWord"));
    }
  }, []);

  // check the guess to see if it the letters are correct or are contained in todays word - any incorrect letters are added to the incorrectLetters array
  const checkGuess = (guess, guessCount) => {
    const index = guessCount;
    setCheckWord(true);
    if (guessesSplit.length >= 6) {
      return;
    }

    guessesSplit[index] = {
      value: guess,
      id: index,
      isCorrect: new Array(5).fill(false),
      contains: new Array(5).fill(false),
      checkWord: false,
    };

    for (let i = 0; i < todaysWordSplit.length; i++) {
      for (let j = 0; j < guess.length; j++) {
        let currentGuessLetter = guess[j];
        let currentWordLetter = todaysWordSplit[i][j];
        console.log(currentGuessLetter);
        todaysWordSplit[i].forEach((letter) => {
          if (letter === currentGuessLetter) {
            guessesSplit[index].contains[j] = true;
          }
        });

        if (
          currentWordLetter !== currentGuessLetter &&
          guessesSplit[index].contains[j] === false
        ) {
          setIncorrectLetters((prev) => [...prev, currentGuessLetter]);
        }

        if (currentWordLetter === currentGuessLetter) {
          guessesSplit[index].isCorrect[j] = true;
        }
      }
    }

    guessesSplit[index].checkWord = true;
    console.log("incorrect letters =>", incorrectLetters);
    if (guess === todaysWord) {
      setCorrectGuess(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      } else if (e.key.length === 1) {
        setCurrentGuess(currentGuess + e.key);
        if (currentGuess.length === WORD_LENGTH && guessCount <= 6) {
          guesses.splice(guessCount, 1, currentGuess);
          setCurrentGuess("");
        } else if (currentGuess.length > WORD_LENGTH) {
          console.log("returning");
          return;
        }
      } else if (e.key === "Enter") {
        // if enter key is pressed and currentguess length is equal to WORD_LENGTH
        if (currentGuess.length === WORD_LENGTH && guessCount <= 6) {
          // if current guess is equal to todays word
          guesses.splice(guessCount, 1, currentGuess);
          checkGuess(currentGuess, guessCount);
          setCurrentGuess("");
          setGuessCount(guessCount + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentGuess, guesses, guessCount, todaysWord, guessesSplit]);
  console.log("current guess =>", currentGuess, guesses);
  console.log("incorrect letters =>", incorrectLetters);
  console.log(guessCount);

  return (
    <div className="h-screen w-screen bg-[#121213] select-none">
      {correctGuess ? <WinningConfetti /> : null}
      <div className="w-full h-full">
        <div className="flex flex-row justify-center w-full border-b-2">
          <h1 className="text-white text-6xl font-medium">
            Wordle: {todaysWord}
          </h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full mt-32 mb-12">
          {guesses.map((guess, index) => {
            const isCurrentGuess =
              index === guesses.findIndex((val) => val == null);
            return (
              <Row
                key={index}
                guess={isCurrentGuess ? currentGuess : guess ?? ""}
                wordLength={WORD_LENGTH}
                contains={
                  guessesSplit[index]?.contains
                    ? guessesSplit[index]?.contains
                    : null
                }
                isCorrect={
                  guessesSplit[index]?.isCorrect
                    ? guessesSplit[index]?.isCorrect
                    : null
                }
                checkWord={
                  guessesSplit[index]?.checkWord
                    ? guessesSplit[index]?.checkWord
                    : false
                }
                guessCount={guessCount}
              />
            );
          })}
        </div>
        <Keyboard incorrectLetters={incorrectLetters} />
      </div>
    </div>
  );
}

export default App;
