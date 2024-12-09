import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleSpeak = () => {
    if (text.trim() !== "") {
      const word = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(word);
    } else {
      alert("Please enter some text to convert to speech.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Text-to-Speech Converter</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Type something here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          margin: "20px 0",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <br />
      <button
        onClick={handleSpeak}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Speak
      </button>
    </div>
  );
}

export default App;
