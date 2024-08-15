import React, { useRef, useState } from "react";

export const App = () => {
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

  const getIndex = (input) => {
    return input.indexOf("\\n");
  };
  const getDelimiter = (input, newLinePos) => {
    const delimiter = input.substring(2, newLinePos);
    return delimiter;
  };

  const calculate = () => {
    const newLinePos = getIndex(inputString);
    const delimiter = getDelimiter(inputString, newLinePos);

    const values = inputString.slice(newLinePos + 2).split(delimiter);
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
