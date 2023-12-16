import React from "react";
import styled from "@emotion/styled";

interface Props {
  label?: string;
  children: React.ReactNode;
  htmlFor?: string;
  error?: {
    message: string;
    ref: any;
    type: string;
  };
}

const Field: React.FC<Props> = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChild(children);
  return (
    <Contariner errorState={!!error}>
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {!!error && <ErrorMessage role="alert">{error.message}</ErrorMessage>}
    </Contariner>
  );
};

const getChild = (children: React.ReactNode) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child?.props.id;
  }
};

export default Field;

interface ContainerTypes {
  errorState: boolean;
}

const Contariner = styled.div<ContainerTypes>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  margin: 16px 0;
  padding: 0;
  border: none;
  width: 100%;

  input,
  textarea {
    border-color: ${({ errorState }) => (errorState ? "red" : "#d9d9d9")};
  }
`;

const Label = styled.label`
  margin-bottom: 2px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;
