import React from 'react'

const KeyboardRow = () => {
  return (
      <div className="flex bg-red-500 flex-row justify-center items-center h-20 w-full mb-2" id="keyboardRow">
        
      </div>
  )
}

const KeyboardKey = ({ keyValue, specialKey }) => {
  return (
    <button type="button" data-key={keyValue.toUpperCase()} className={`bg-gray-400 text-white text-xl fold-bold ${specialKey ? "w-20" : "w-12" } h-16 bg-gray-600 rounded-md ml-2`}>{keyValue.toUpperCase()}</button>
  )
}

export const Keyboard = () => {
  return (
    <>
    <div className="w-full h-auto">
      <div className="flex flex-row justify-center items-center h-20 w-full mb-2" id="keyboardRow">  
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
      <div className="flex flex-row justify-center items-center h-20 w-full mb-2" id="keyboardRow">  
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
      <div className="flex flex-row justify-center items-center h-20 w-full mb-2" id="keyboardRow">  
        <KeyboardKey keyValue="Enter" specialKey/>
        <KeyboardKey keyValue="z" />
        <KeyboardKey keyValue="x" />
        <KeyboardKey keyValue="c" />
        <KeyboardKey keyValue="v" />
        <KeyboardKey keyValue="b" />
        <KeyboardKey keyValue="n" />
        <KeyboardKey keyValue="m" />
        <KeyboardKey keyValue="Backspace" specialKey/>
      </div>
      </div>
    </>
  )
};