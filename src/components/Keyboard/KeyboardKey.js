import { useState, useEffect } from "react";

export const KeyboardKey = ({
  keyValue,
  specialKey,
  icon,
  pressed,
  incorrectLetters,
}) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const [invalidLetter, setInvalidLetter] = useState(false);

  useEffect(() => {
    if (incorrectLetters?.includes(keyValue)) {
      setInvalidLetter(true);
    }
  }, [keyValue, incorrectLetters]);

  const handleKeyPress = (e) => {
    console.log(e.target.attributes[1].value);
    setKeyPressed(true);
    setTimeout(() => {
      setKeyPressed(false);
    }, 100);
  };

  return (
    <button
      type="button"
      data-key={keyValue}
      pressed={pressed}
      onClick={(e) => handleKeyPress(e)}
      onKeyDown={(e) => {
        handleKeyPress(e);
      }}
      className={`select-none flex justify-center items-center ${
        keyPressed
          ? "bg-gray-500"
          : invalidLetter
          ? "bg-gray-700"
          : "bg-gray-400"
      } 
      text-white text-xl font-medium ${
        specialKey ? "w-20" : "w-12"
      } h-16 text-lg rounded-md mx-auto sm:ml-2 sm:mr-0 `}
    >
      {icon ? icon : keyValue.toUpperCase()}
    </button>
  );
};
