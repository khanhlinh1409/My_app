import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = import.meta.env.VITE_API_KEY || "";
if (!API_KEY) {
  throw new Error(
    "API key is missing. Please set VITE_GOOGLE_API_KEY in your environment variables."
  );
}
const genAI = new GoogleGenerativeAI(API_KEY);

export function Gemini() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    if (!input.trim()) return;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(input);
      const text = result.response.text();
      setResponse(text);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setResponse("Error when calling Gemini API");
    }
  };

  return (
    <div className="Gemini" style={{ padding: 40 }}>
      <h1>🤖 Gemini AI React Demo</h1>
      <textarea
        rows={4}
        cols={50}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Gemini anything..."
      />
      <br />
      <button className="btn btn-success" onClick={handleSubmit}>
        Send
      </button>
      <div style={{ marginTop: 20 }}>
        <h3>Result:</h3>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default Gemini;
