import { useEffect, useState } from "react";
import { TiBackspaceOutline } from "react-icons/ti";
import { KeyboardKey } from "./KeyboardKey"

export const Keyboard = ({ incorrectLetters }) => {
  const [pressed, setPressed] = useState(false);

  console.log("in the keyboard", incorrectLetters)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace") {
        setPressed(true);
        return;
      } else if (e.key === "Enter") {
        setPressed(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pressed]);

  const topRowKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const midRowKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const bottomRowKeys = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <>
      <div className="w-full h-auto" id="keyboard keyboardTop">
        <div
          className="flex flex-row justify-center items-center h-20 w-full mb-2"
          id="keyboardRow"
        >
          {topRowKeys.map((key, index) => (
            <KeyboardKey
              key={key}
              keyValue={key}
              incorrectLetters={incorrectLetters}
            />
          ))}
        </div>
        <div
          className="flex flex-row justify-center items-center h-20 w-full mb-2"
          id="keyboardRow keyboardMiddle"
        >
          {midRowKeys.map((key, index) => (
            <KeyboardKey
              key={key}
              keyValue={key}
              incorrectLetters={incorrectLetters}
            />
          ))}
        </div>
        <div
          className="flex flex-row justify-center items-center h-20 w-full mb-2"
          id="keyboardRow keyboardMiddle"
        >
          <KeyboardKey keyValue="Enter" specialKey />
          {bottomRowKeys.map((key, index) => (
            <KeyboardKey
              key={key}
              keyValue={key}
              incorrectLetters={incorrectLetters}
            />
          ))}
          <KeyboardKey
            keyValue="backspace"
            icon={<TiBackspaceOutline className="w-8 h-auto" />}
            specialKey
          />
        </div>
      </div>
    </>
  );
};