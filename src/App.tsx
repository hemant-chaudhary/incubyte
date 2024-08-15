import React, { useState } from "react";

export const App = () => {
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

  const calculate = () => {
    const values = inputString.split(",");

    const output = values.reduce((a, b) => {
      return a + Number(b);
    }, 0);
    setOutput(output);
  };

  return (
    <div>
      <input
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <div>Output: {output}</div>
    </div>
  );
};
