import styled from "@emotion/styled";
import RecipeForm from "./recipe-form.component";

const Recipe = () => {
  return (
    <Container>
      <h1>New recipe</h1>
      <RecipeForm />
    </Container>
  );
};

export default Recipe;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;
