import React, { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder=""
        className="inputbox"
      />
      <button type="submit" className="button">Find wine</button>
    </form>
  );
};

export default Input;
