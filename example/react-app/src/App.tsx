// src/App.tsx
import { useState } from "react";
import { send as hopMailSend} from "@hopmail/core";

function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    try {
      const response = await hopMailSend(
        "YOUR_API_KEY",
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        email,
        { name: "Quoc" }
      );
      setStatus(`Email sent! Status: ${response.status}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setStatus(`Error: ${err.text || err.message}`);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hopmail Demo</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Recipient email"
      />
      <button onClick={handleSend} style={{ marginLeft: "1rem" }}>
        Send Email
      </button>
      <p>{status}</p>
    </div>
  );
}

export default App;
