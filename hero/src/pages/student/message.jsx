import React, { useState, useEffect, useRef } from "react";

function Message() {
 const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (newMsg.trim() === "") return;
    const msg = { id: Date.now(), text: newMsg, sender: "You" };
    setMessages([...messages, msg]);
    setNewMsg("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={styles.container }>
      <div className="row">
        {/* Left Section (Wider - 8 columns) */}
        <div className="col-md-8 leftcontainer p-3 mt-4">
        <div style={styles.chatBox}>
        {messages.map((msg) => (
          <div key={msg.id} style={styles.message}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
      </div>
      
    

         

          
        </div>

        {/* Right Section (Smaller - 4 columns) */}
        <div className="col-md-4 rightcontainer p-3 bg-light mt-4">
        
     hiiii
        
        </div>
        
      </div>
      
    </div>

    
    
  );


}


const styles = {
    container: {
      width: "100%",
      margin: "0 auto",
    
      fontFamily: "Arial, sans-serif",
    },
    chatBox: {
      border: "1px solid #ccc",
      height: "300px",
      padding: "10px",
      overflowY: "auto",
      background: "#f9f9f9",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    message: {
      padding: "5px 0",
    },
    inputBox: {
      display: "flex",
    },
    input: {
      flex: 1,
      padding: "8px",
      borderRadius: "4px 0 0 4px",
      border: "1px solid #ccc",
      borderRight: "none",
    },
    button: {
      padding: "8px 16px",
      borderRadius: "0 4px 4px 0",
      border: "1px solid #ccc",
      background: "#4caf50",
      color: "#fff",
      cursor: "pointer",
    },
  };
  

export default Message;