import { CircularProgress } from "@mui/material";
import { WordData } from "../../../types/word.type";

interface Props {
  response: {
    data: WordData[] | null;
    loading: boolean | undefined;
  };
}

const Response: React.FC<Props> = ({ response }) => {
  if (response.loading) {
    return <CircularProgress />;
  }
  return (
    <>
      {response.data && (
        <span className="text-lg font-semibold">
          {response?.data[0].meanings[0].definitions[0].definition}
        </span>
      )}
    </>
  );
};

export default Response;
