const askChatGPT = async (message, handler) => {
  let apiKey = "YOUR_CHATGPT-KEY";
  const prompt = [
    {
      role: "system",
      content: `Provide a helpful message and activities to cope with this situation. Always recommend consulting a professional:${message}`,
    },
  ];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: prompt,
        max_tokens: 150,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      const answer = data.choices[0].message.content;
      console.log(answer);
      handler(answer);
    } else {
      console.log(data.error.message);
    }
  } catch (error) {
    console.error("Error sending message to ChatGPT:", error);
  }
};

export default askChatGPT;
