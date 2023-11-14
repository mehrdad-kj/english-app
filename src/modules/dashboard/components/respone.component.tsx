import { LinearProgress } from "@mui/material";
import { WordData } from "../../../types/word.type";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";

interface Props {
  response: {
    data: WordData[] | null;
    loading: boolean | undefined;
    error: string;
  };
}

const Response: React.FC<Props> = ({ response }) => {
  console.log("response_", response);

  const handlePlay = () => {
    const audio = document.getElementById("myAudio") as HTMLAudioElement;
    if (audio) {
      audio.play();
    }
  };

  if (response.loading) {
    return <LinearProgress />;
  }
  if (response.error) {
    return <span className="text-lg font-semibold">{response?.error}</span>;
  }
  return (
    <>
      {response.data && (
        <>
          <div className="flex justify-between">
            <span className="text-lg font-semibold">
              {`Definition: ${response?.data[0].meanings[0].definitions[0].definition}`}
            </span>
            <div>
              <IconButton>
                <VolumeUpIcon onClick={handlePlay} />
              </IconButton>
              <span>{response?.data[0].phonetic}</span>
            </div>
          </div>
          <audio id="myAudio">
            <source src={response?.data[0].phonetics[0].audio} />
          </audio>
        </>
      )}
    </>
  );
};

export default Response;
