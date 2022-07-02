
export const Row = ({ guess, wordLength }) => {
  const tiles = [];
  for (let i = 0; i < wordLength; i++) {
    const char = guess[i];
    tiles.push(<div key={i} className="flex flex-col justify-center items-center w-16 h-16 text-5xl font-medium border-gray-600 border-2 rounded-md">
              {char} 
              </div>)
  }
  return (
    <div className="flex gap-2 flex-row justify-center items-center text-white w-full uppercase">
      {tiles}
    </div>
  )
}