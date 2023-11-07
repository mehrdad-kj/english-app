import { useEffect, useState } from "react";
import axios from "axios";
import { WordData } from "../types/word.type";

export default function useDictionary(word: string) {
  const [data, setData] = useState<WordData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setData(response.data);
      } catch (err) {
        console.log("err", err);
      }
    };

    fetchData();
  }, [word]);

  return data;
}
