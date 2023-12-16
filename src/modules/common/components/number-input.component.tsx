import styled from "@emotion/styled";

const NumberInput = ({ value, onChange, ...props }: any) => {
  const handleChange = (e) => {
    const value = e.target.valueAsNumber || 0;
    onChange(value);
  };

  return (
    <Input
      type="number"
      value={value}
      onChange={handleChange}
      min={0}
      {...props}
    />
  );
};

export default NumberInput;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;
