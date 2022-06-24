
export const Row = ({ guess, wordLength }) => {
  const tiles = [];
  for (let i = 0; i < wordLength; i++) {
    const char = guess[i];
    tiles.push(<div key={i} className="flex flex-col justify-center items-center w-20 h-20 text-5xl font-medium border-gray-200 border-2 rounded-md">
              {char} 
              </div>)
  }
  return (
    <div className="flex gap-4 mb-2 flex-row justify-center items-center text-white w-full h-20 uppercase">
      {tiles}
    </div>
  )
}