import { useState } from "react";

export default function FormCheckout({handleCheckout}) {
  const [formData, setFormData] = useState({
    username: "",
    mail: "",
    phone: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    handleCheckout(formData);
  }

  function handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;

    console.log("handleInput:",inputName, value);
    const newFormData = { ...formData };
    newFormData[inputName] = value;
    setFormData(newFormData);
  }

  function handleReset() {
    setFormData({ username: "", mail: "", phone: "" });
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <div>
        <label>
          Nombre:
          <input
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="Pamela Ramirez"
            value={formData.username}
          ></input>
        </label>
        <label>
          Email:
          <input
            onChange={handleInputChange}
            type="email"
            name="mail"
            placeholder="pamela@hotmail.com"
            value={formData.mail}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
        </label>
        <label>
          Telefono:
          <input
            onChange={handleInputChange}
            type="phone"
            name="phone"
            placeholder="098505195"
            value={formData.phone}
          ></input>
        </label>
      </div>
      <button type="submit">Enviar</button>
      <button onClick={handleReset} type="button">
        Resetear
      </button>
    </form>
  );
}
