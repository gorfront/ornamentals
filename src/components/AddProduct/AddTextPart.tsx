import { useState } from "react";

const AddTextPart: React.FC<{
  setTextPart: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        value: string;
      }[]
    >
  >;
}> = ({ setTextPart }) => {
  const [text, setText] = useState([
    {
      id: "0",
      placeholder: "артикул",
      value: "",
    },
    {
      id: "1",
      placeholder: "цена",
      value: "",
    },
  ]);

  const handleChange = (id: string, newValue: string) => {
    setText((prev) =>
      prev.map((el) => (el.id === id ? { ...el, value: newValue } : el))
    );

    setTextPart((prev) =>
      prev.map((el) => (el.id === id ? { ...el, value: newValue } : el))
    );
  };

  return (
    <>
      {text.map((el) => (
        <div key={el.id} className="addProduct--about__text__item">
          <label htmlFor={`input-${el.id}`}>{el.placeholder}</label>
          <input
            id={`input-${el.id}`}
            type="text"
            value={el.value}
            onChange={(e) => {
              handleChange(el.id, e.target.value);
            }}
            required
          />
        </div>
      ))}
    </>
  );
};

export default AddTextPart;
