import { useEffect, useState } from "react";
import axios from "axios";
import { WordData } from "../types/word.type";

export default function useDictionary(word: string) {
  const [data, setData] = useState<WordData[] | null>(null);
  const [loading, setLoading] = useState<boolean>();
  // handle err message
  // const [error, setError] = useState<string>();


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setLoading(false);
        setData(response.data);
      } catch (err) {
        setLoading(false);
        console.log("err", err);
      }
    };

    fetchData();
  }, [word]);

  return { data, loading };
}
