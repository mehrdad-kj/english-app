import { useEffect, useState } from "react";
import axios from "axios";
import { WordData } from "../types/word.type";
import { toast } from "react-toastify";

export default function useDictionary(word: string) {
  const [data, setData] = useState<WordData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");


  useEffect(() => {
    if (word) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
          );
          console.log("response", response);
          setError("")
          setData(response.data);
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
          }, 500)
        } catch (err: any) {
          if (err.response.status === 404) {
            console.log("err", err);
            toast.error("that's not even a word!");
            setError("that's not even a word!")
          }
        }
      };

      fetchData();
    }
  }, [word]);

  return { data, loading, error };
}
