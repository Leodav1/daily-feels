import { useState } from "react";

const Journal = () => {
  const [inputText, setInputText] = useState("");
  const [entries, setEntries] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEntries([...entries, inputText]);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button type="submit">Send</button>
      </form>

      <br />

      {entries.length > 0 && (
        <ul>
          {entries.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Journal;
