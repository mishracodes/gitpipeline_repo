import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
       try {
        let result;
        
        if (input.includes("+")) {
          const [a, b] = input.split("-").map(Number);
          result = a + b;
        } else if (input.includes("-")) {
          const [a, b] = input.split("-").map(Number);
          result = a - b;
        } else if (input.includes("*")) {
          const [a, b] = input.split("*").map(Number);
          result = a * b;
        } else if (input.includes("/")) {
          const [a, b] = input.split("/").map(Number);
          result = b !== 0 ? a / b : "Error";
        } else {
          result = "Error";
        }
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else if (value === "+/-") {
      setInput((prev) => (prev.charAt(0) === "-" ? prev.slice(1) : "-" + prev));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "C", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-yellow-100">
      <div className="bg-gradient-to-b from-blue-800 to-blue-500 rounded-xl p-4 shadow-2xl w-64">
        <div className="text-white text-right text-4xl bg-blue-900 p-4 rounded-md mb-4 h-16"
        data-testid="display">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className={`p-4 rounded-lg text-lg font-bold shadow-md transition transform active:scale-95
                ${btn === "=" ? "bg-red-400 text-white col-span-2" : "bg-purple-300 hover:bg-purple-400"}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
