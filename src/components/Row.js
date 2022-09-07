import { XyzTransitionGroup } from "@animxyz/react";

export const Row = ({
  guess,
  wordLength,
  contains,
  isCorrect,
  checkWord,
  guessCount,
}) => {
  const tiles = [];
  for (let i = 0; i < wordLength; i++) {
    const char = guess[i];
    const delay = i * 0.1;
    const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5];

    tiles.push(
      <div
        key={i}
        className={`flex flex-col justify-center items-center w-14 h-14 sm:w-16 sm:h-16 text-4xl font-medium border-2 rounded-sm ${
          char?.length ? `border-gray-400` : "border-gray-600"
        } ${contains && contains[i] === true ? "bg-yellow-500" : null} ${
          isCorrect && isCorrect[i] === true ? "bg-green-500" : null
        } ${
          contains &&
          contains[i] === false &&
          isCorrect &&
          isCorrect[i] === false
            ? "bg-neutral-800"
            : null
        } 
     `}
      >
        {char}
      </div>
    );
  }
  return (
    <div className="flex gap-2 flex-row justify-center items-center text-white w-full uppercase">
      <XyzTransitionGroup
        className="flex flex-row gap-2"
        xyz="fade front-3 flip-down-50% duration-10 stagger-5"
      >
        {tiles}
      </XyzTransitionGroup>
    </div>
  );
};
