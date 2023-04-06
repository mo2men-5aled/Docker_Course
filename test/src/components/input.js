import { React, useState } from "react";

import http from "../connection/connect";

const Input = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await http.post("/reciever", { name: name });
    setMessage(response.data.msg);
  };

  return (
    <div className="ui container">
      <div
        style={{
          border: "2px solid gray",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          marginTop: "20px",
        }}
      >
        <form className="ui form" onClick={handleSubmit}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button className="ui button" type="submit">
            Submit
          </button>
        </form>

        <div className="ui success message">
          {message && <div className="header">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default Input;
