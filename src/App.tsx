import Recipe from "./modules/dashboard/components/recipe.component";
import SentenceForm from "./modules/dashboard/components/sentence.component";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
      <SentenceForm />
      <Recipe />
      <ToastContainer />
    </>
  );
}

export default App;
