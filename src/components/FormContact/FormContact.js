import { useState } from "react";

export default function MyForm() {
  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    enterprise: /^[\da-zA-ZÀ-ÿ\s]{1,80}$/,
    phone: /^(\d{10,18}|\(\d{2}\)\s*\d{4}[-\s]?\d{4})$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mesagge: /^[\da-zA-ZÀ-ÿ\s]{1,120}$/,
  };

  const [inputs, setInputs] = useState([
    {
      id: "name",
      name: "name",
      type: "text",
      value: "",
      isChanged: false,
      isValid: null,
    },
    {
      id: "enterprise",
      name: "enterprise",
      type: "text",
      value: "",
      isChanged: false,
      isValid: null,
    },
    {
      id: "phone",
      name: "phone",
      type: "number",
      value: "",
      isChanged: false,
      isValid: null,
    },
    {
      id: "email",
      name: "email",
      type: "text",
      value: "",
      isChanged: false,
      isValid: null,
    },
    {
      id: "mesagge",
      name: "mesagge",
      type: "textarea",
      value: "",
      isChanged: false,
      isValid: null,
    },
  ]);

  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
    const inputName = inputs[index].name;
    const isValid = expresiones[inputName].test(newValue);

    setInputs((prevInputs) =>
      prevInputs.map((input, i) =>
        i === index
          ? {
              ...input,
              value: newValue,
              isChanged: newValue.trim() !== "",
              isValid: isValid,
            }
          : input
      )
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isFormValid = inputs.every((input) => input.isValid);

    if (!isFormValid) {
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }

    const formData = inputs.reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Hubo un problema al enviar el formulario. Inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div
          key={input.id}
          className={`form__group ${
            input.isChanged && input.isValid ? "input__change" : ""
          } ${
            input.isChanged && input.isValid === false ? "input__error" : ""
          }`}
        >
          <div className="form__input-container">
            {input.type === "textarea" ? (
              <textarea
                className="form__input"
                placeholder=""
                id={input.id}
                name={input.name}
                autoComplete="off"
                value={input.value}
                onChange={(e) => handleInputChange(index, e)}
              />
            ) : (
              <input
                className="form__input"
                placeholder=""
                type={input.type}
                id={input.id}
                name={input.name}
                autoComplete="off"
                value={input.value}
                onChange={(e) => handleInputChange(index, e)}
              />
            )}
            <label htmlFor={input.id}>
              {input.name.charAt(0).toUpperCase() + input.name.slice(1)}
            </label>
          </div>
          {input.isChanged && input.isValid === false && (
            <p className="form__input-error">
              Formato incorrecto para {input.name}
            </p>
          )}
        </div>
      ))}
      <div className="form__group grid__span2 form__group-button">
        <button className="" type="submit">
          ¡Cuentános tu idea!
        </button>
      </div>
    </form>
  );
}
