import React from "react";
import Button from "../Button";
import FormStyle from "./Form.module.scss";

function Form() {
  return (
    <form className={FormStyle.novaTarefa}>
      <div className={FormStyle.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={FormStyle.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
}

export default Form;
