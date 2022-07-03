import { useState } from "react";

export const KeyboardKey = ({ keyValue, specialKey, icon, pressed }) => {
  const [keyPressed, setKeyPressed] = useState(false);
  
  const handleKeyPress = (e) => {
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
      onKeyDown={(e) =>  {
        handleKeyPress(e)}}
      className={`select-none flex justify-center items-center ${keyPressed ? "bg-gray-500" : "bg-gray-400"} 
      text-white text-xl font-medium ${specialKey ? "w-20" : "w-12"} h-16 bg-gray-600 rounded-md ml-2`}
    >
      {icon ? icon : keyValue.toUpperCase()}
    </button>
  );
};
