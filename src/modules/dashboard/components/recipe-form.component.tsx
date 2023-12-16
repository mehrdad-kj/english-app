import styled from "@emotion/styled";
import FieldSet from "../../common/components/fieldSet.component";
import Field from "../../common/components/field.component";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import NumberInput from "../../common/components/number-input.component";

const RecipeForm = () => {
  const { register, handleSubmit, formState, control } = useForm({
    defaultValues: {
      ingredients: [{name : "test1", amount: 1}, {name : "test2", amount: 2}]
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: "ingredients",
    control,
  });

  console.log(formState);
  const onSubmit = (formBody) => {
    console.log(formBody);
  };

  return (
    <Container>
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label="Basics">
          <Field label="name" error={formState.errors.name}>
            <Input
              {...register("name", { required: "true" })}
              type="text"
              name="name"
              id="name"
            />
          </Field>
          <Field label="Description">
            <TextArea
              {...register("description")}
              name="description"
              id="description"
              rows={10}
            />
          </Field>
          <Field label="Servings" error={formState.errors.amount}>
            <Controller
              control={control}
              name="amount"
              defaultValue={1}
              render={({ field }) => <NumberInput {...field} id="amount" />}
              rules={{
                max: {
                  value: 10,
                  message: "Maximum number of servings is 10",
                },
              }}
            />
          </Field>
        </FieldSet>
        <FieldSet label="Ingredients">
          {fields.map((field, index) => {
            return (
              <Row key={field.id}>
                <Field label="Name">
                  <Input
                    type="text"
                    {...register(`ingredients[${index}].name`)}
                    id={`ingredients[${index}].name`}
                  />
                </Field>
                <Field label="Amount">
                  <Controller
                    control={control}
                    name={`ingredients[${index}].amount`}
                    defaultValue={1}
                    render={({ field }) => (
                      <NumberInput {...field} id={`ingredients[${index}].amount`} />
                    )}
                    rules={{
                      max: {
                        value: 10,
                        message: "Maximum number of servings is 10",
                      },
                    }}
                  />
                </Field>
                <Button type="button" onClick={() => remove(index)}>
                  &#8722;
                </Button>
              </Row>
            );
          })}
          <Button
            type="button"
            onClick={() => append({ name: "", amount: "" , test: ""})}
          >
            Add ingredient
          </Button>
        </FieldSet>
        <Field>
          <Button variant="primary">Save</Button>
        </Field>
      </form>
    </Container>
  );
};

export default RecipeForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  padding: 4px 11px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

interface ButtonTypes {
  variant: string;
}

const Button = styled.button<ButtonTypes>`
  font-size: 14px;
  cursor: pointer;
  padding: 0.6em 1.2em;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin-right: auto;
  background-color: ${({ variant }) =>
    variant === "primary" ? "#3b82f6" : "white"};
  color: ${({ variant }) => (variant === "primary" ? "white" : "#213547")};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > * {
    margin-right: 20px;
  }

  button {
    margin: 25px 0 0 8px;
  }
`;
