import { useState } from "react";
import askChatGPT from "../../hooks/api/getAssistantAdvice";

const Asistant = () => {
  const [inputText, setInputText] = useState("");
  const [question, setQuestion] = useState("");
  const [chatGPTResponse, setChatGPTResponse] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAskChatGPT = () => {
    askChatGPT(inputText, setChatGPTResponse);
    setQuestion(inputText);
    setInputText("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
      </div>

      <br />
      <button onClick={handleAskChatGPT}>Ask ChatGPT</button>
      <br />

      <p>{question && `Your question: ${question}`}</p>
      <p>{chatGPTResponse && `Answer: ${chatGPTResponse}`}</p>
    </>
  );
};

export default Asistant;
