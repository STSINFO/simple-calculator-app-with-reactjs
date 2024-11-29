import { useState, useRef } from "react";

function App() {
  const [result, setResult] = useState(0);
  const inputRef = useRef("");
  const resultRef = useRef("");

  function add(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }
  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }
  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }
  function resetInput(e) {
    e.preventDefault();
    resultRef.current.value = " ";
  }

  return (
    <div className="App">
      <p ref={resultRef}>{result}</p>
      <input type="number" ref={inputRef} placeholder="Type something" />
      <button onClick={add}>Add</button>
      <button onClick={minus}>subtract</button>
      <button onClick={times}>multiply</button>
      <button onClick={divide}>divide</button>
      <button onClick={resetResult}>reset result</button>
      <button onClick={resetInput}>reset input</button>
    </div>
  );
}

export default App;
