import { useState, useRef } from "react";
import useDictionary from "../../../hooks/use-dictionary-hook";

const SentenceForm = () => {
  const [sentence, setSentence] = useState<string>();
  const [clickedWord, setClickedWord] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);


  const handleClickedWord = (word: string) => {
    setClickedWord(word);
  };

  const wordData = useDictionary(clickedWord || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setSentence(inputRef.current.value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Sentence..."
          ref={inputRef}
        />
        <button type="submit">Enter</button>
      </form>
      {sentence?.split(" ").map((word, idx) => (
        <span
          key={idx}
          onClick={() => handleClickedWord(word)}
        >{` ${word} `}</span>
      ))}
      <br />
      {wordData && (
        <span>{wordData[0].meanings[0].definitions[0].definition}</span>
      )}
    </>
  );
};

export default SentenceForm;
