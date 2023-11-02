import { useCallback, useState } from "react";
import useDictionary from "./hooks/use-dictionary-hook";

function App() {
  const [clickedWord, setClickedWord] = useState<string | null>(null);
  console.log("clickedWord", clickedWord);

  const sentence = "Yesterday I went to the store to buy milk and eggs.";
  const handleClickedWord = useCallback((word: string) => {
    setClickedWord(word);
  }, [clickedWord]);

  // const handleClickedWord =(word: string) => {
  //   setClickedWord(word);
  // }

  

  const wordData = useDictionary(clickedWord || "");

  console.log("wordData", wordData);

  return (
    <>
      {sentence.split(" ").map((word) => (
        <span onClick={() => handleClickedWord(word)}>{` ${word} `}</span>
      ))}
      <br />
      {wordData && wordData[0]?.meanings[0].definitions[0].definition && (
        <span>{wordData[0].meanings[0].definitions[0].definition}</span>
      )}
    </>
  );
}

export default App;
