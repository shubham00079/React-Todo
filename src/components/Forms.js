import React from "react";

const Forms = ({ inputText, setInputText, todos, setTodos }) => {
  const TextHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };
  const SubmitHandler = (e) => {
    setTodos([...todos, { text: inputText, id: Date.now() }]);
    setInputText("");
    e.preventDefault();
  };
  return (
    <form>
      <input value={inputText} type="text" onChange={TextHandler}></input>
      <button type="submit" onClick={SubmitHandler}>
        Submit
      </button>
    </form>
  );
};

export default Forms;
