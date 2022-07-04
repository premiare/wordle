
export const Row = ({ guess, wordLength, contains, isCorrect}) => {
  console.log("CONTAINS", contains)
  console.log("IS CORRECT", isCorrect);
  const tiles = [];
  for (let i = 0; i < wordLength; i++) {
    const char = guess[i];
    tiles.push(<div key={i} className={`flex flex-col justify-center items-center w-16 h-16 text-4xl font-medium ${char?.length ? "border-gray-400" : "border-gray-600" } 
    ${contains && contains[i] === true ? "bg-yellow-500" : ""} ${isCorrect && isCorrect[i] === true ? "bg-green-500" : ""} border-2 rounded-md hover:transform rotate-y-180`}
    >
    {char} 
    </div>)
  }
  return (
    <div className="flex gap-2 flex-row justify-center items-center text-white w-full uppercase">
      {tiles}
    </div>
  )
}