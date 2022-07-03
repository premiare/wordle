import { useEffect, useState } from "react";
import { TiBackspaceOutline } from "react-icons/ti";
import { KeyboardRow } from "./KeyboardKey";
import { KeyboardKey } from "./KeyboardKey"

export const Keyboard = () => {
  const [pressed, setPressed] = useState(false);
 
  const keyboardRow = document.querySelector("#keyboardRow");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.key === "Backspace") {
        setPressed(true);
        return;
      } else if (e.key === "Enter") {
        setPressed(true);
      }           
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pressed]);

  return (
    <>
      <div className="w-full h-auto" id="keyboard keyboardTop">
        <div
          className="flex flex-row justify-center items-center h-20 w-full mb-2"
          id="keyboardRow"
        >
          <KeyboardKey keyValue="q" />
          <KeyboardKey keyValue="w" />
          <KeyboardKey keyValue="e" />
          <KeyboardKey keyValue="r" />
          <KeyboardKey keyValue="t" />
          <KeyboardKey keyValue="y" />
          <KeyboardKey keyValue="u" />
          <KeyboardKey keyValue="i" />
          <KeyboardKey keyValue="o" />
          <KeyboardKey keyValue="p" />
        </div>
        <div
          className="flex flex-row justify-center items-center h-20 w-full mb-2"
          id="keyboardRow keyboardMiddle"
        >
          <KeyboardKey keyValue="a" />
          <KeyboardKey keyValue="s" />
          <KeyboardKey keyValue="d" />
          <KeyboardKey keyValue="f" />
          <KeyboardKey keyValue="g" />
          <KeyboardKey keyValue="h" />
          <KeyboardKey keyValue="j" />
          <KeyboardKey keyValue="k" />
          <KeyboardKey keyValue="l" />
        </div>
        <div
          className="flex flex-row justify-center items-center h-20 w-full mb-2"
          id="keyboardRow keyboardMiddle"
        >
          <KeyboardKey keyValue="Enter" specialKey />
          <KeyboardKey keyValue="z" />
          <KeyboardKey keyValue="x" />
          <KeyboardKey keyValue="c" />
          <KeyboardKey keyValue="v" />
          <KeyboardKey keyValue="b" />
          <KeyboardKey keyValue="n" />
          <KeyboardKey keyValue="m" />
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