import { useState, useRef } from "react";
import useDictionary from "../../../hooks/use-dictionary-hook";
import Button from "../../common/components/button.component";
import Response from "./respone.component";

const SentenceForm = () => {
  const [sentence, setSentence] = useState<string>();
  const [clickedWord, setClickedWord] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClickedWord = (word: string) => {
    setClickedWord(word);
  };

  const response = useDictionary(clickedWord || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setSentence(inputRef.current.value);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:w-1/2 shadow-md bg-neutral-50 p-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Sentence..."
            ref={inputRef}
            className="p-2 border border-neutral-300 w-full"
          />
          <Button label="Enter" type="submit" />
        </form>
        <div>
          {sentence?.split(" ").map((word, idx) => {
            return (
              <span
                key={idx}
                className="text-lg font-semibold cursor-pointer hover:text-green-500 hover:shadow-sm"
                onClick={() =>
                  handleClickedWord(
                    word.includes(".") ? word.split(".")[0] : word
                  )
                }
              >{` ${word} `}</span>
            );
          })}
        </div>
        <Response response={response}/>
      </div>
    </>
  );
};

export default SentenceForm;
