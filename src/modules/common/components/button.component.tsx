interface Props {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({ label, type }) => {
  return (
    <button className="w-28 border my-2 py-1" type={type}>
      {label}
    </button>
  );
};

export default Button;
