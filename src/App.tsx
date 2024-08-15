import React, { useRef, useState } from "react";

export const App = () => {
  const [inputString, setInputString] = useState("");
  const [error, setError] = useState("");
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
    try {
      const output = values.reduce((a, b) => {
        if (Number(b) < 0) {
          throw new Error("Negative number not allowewd");
        }
        return a + Number(b);
      }, 0);
      setOutput(output);
    } catch (e) {
      const negativeValues = values.filter(value => Number(value) < 0);
      const errorMsg = negativeValues.length > 1 ? negativeValues.join(',') : negativeValues[0]
      setError("Negative numbers not allowewd " + errorMsg);
    }
  };

  const textChanged = (value) => {
    setInputString(value);
    setError("");
  };

  return (
    <div>
      <input
        value={inputString}
        onChange={(e) => textChanged(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <div>Output: {output}</div>
      <div style={{ color: "red" }}>{error != "" ? error : null}</div>
    </div>
  );
};
