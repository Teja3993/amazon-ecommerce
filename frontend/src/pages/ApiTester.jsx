import { useState } from "react";

function ApiTester() {
  const [method, setMethod] = useState("POST");
  const [url, setUrl] = useState("http://localhost:4000/api/login");
  const [body, setBody] = useState(`{
  "email": "test@example.com",
  "password": "123456"
}`);
  const [response, setResponse] = useState("");

  async function sendRequest() {
    setResponse("Loading...");

    try {
      const options =
        method === "GET"
          ? { method }
          : {
              method,
              headers: { "Content-Type": "application/json" },
              body,
            };

      const res = await fetch(url, options);
      const text = await res.text();

      setResponse(`Status: ${res.status}\n\n${text}`);
    } catch (err) {
      setResponse("Error: " + err.message);
    }
  }

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h2>API Tester</h2>

      {/* METHOD SELECT */}
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px" }}
      >
        <option>GET</option>
        <option>POST</option>
      </select>

      {/* URL INPUT */}
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
        }}
      />

      {/* REQUEST BODY */}
      {method !== "GET" && (
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="6"
          style={{
            width: "100%",
            padding: "10px",
            fontFamily: "monospace",
            border: "1px solid #ccc",
          }}
        ></textarea>
      )}

      <button
        onClick={sendRequest}
        style={{
          padding: "12px",
          marginTop: "10px",
          background: "#111",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Send Request
      </button>

      {/* RESPONSE BOX */}
      <pre
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#eee",
          borderRadius: "6px",
          whiteSpace: "pre-wrap",
        }}
      >
        {response}
      </pre>
    </div>
  );
}

export default ApiTester;
