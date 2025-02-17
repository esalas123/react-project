import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState([""]);
  const [result, setResult] = useState(null);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  function addInputField() {
    setInputs([...inputs, ""]);
  }

  function removeInputField(index) {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  }

  function handleInputChange(index, value) {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  }

  function handleAddition() {
    setResult(inputs.reduce((acc, val) => acc + parseFloat(val || 0), 0));
  }

  function handleSubtraction() {
    setResult(inputs.reduce((acc, val) => acc - parseFloat(val || 0)));
  }

  function handleMultiplication() {
    setResult(inputs.reduce((acc, val) => acc * parseFloat(val || 1), 1));
  }

  function handleDivision() {
    setResult(inputs.reduce((acc, val) => (parseFloat(val || 1) !== 0 ? acc / parseFloat(val) : "Error: Division by 0")));
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="increment-btn" onClick={handleIncrement}>Increment</button>
      <button className="decrement-btn" onClick={handleDecrement}>Decrement</button>
      <button className="reset-btn" onClick={handleReset}>Reset</button>

      <h2>Basic Calculator</h2>
      <div className="inputs">
        {inputs.map((value, index) => (
          <div key={index} className="input-group">
            <input
              className="calc-input"
              type="number"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Input ${index + 1}`}
            />
            <button className="remove-input-btn" onClick={() => removeInputField(index)}>✖</button>
          </div>
        ))}
      </div>
      <button className="calc-btn add-input-btn" onClick={addInputField}>Add Input</button>
      <div>
        <button className="calc-btn add-btn" onClick={handleAddition}>+</button>
        <button className="calc-btn subtract-btn" onClick={handleSubtraction}>-</button>
        <button className="calc-btn multiply-btn" onClick={handleMultiplication}>*</button>
        <button className="calc-btn divide-btn" onClick={handleDivision}>/</button>
      </div>

      <h3>Result: {result !== null ? result : "No results"}</h3>
    </div>
  );
}

export default App;
