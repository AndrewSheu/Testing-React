import React from "react";
import { useState, useEffect } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // useEffect(()=>{
  //   console.log(name)
  // }, [name])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      msg,
    };
    fetch("http://localhost:8000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      setName("");
      setEmail("");
      setMsg("");
      // page refrash
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      // 處理錯誤情況
    });
  };
  return (
    <div className="box" style={{ backgroundColor: "lightblue" }}>
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contactName">Name</label>
        <input
          type="text"
          id="contactName"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="contactEmail">Email</label>
        <input
          type="text"
          id="contactEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="contactMsg">Message</label>
        <textarea
          name="contactMsg"
          id="contactMsg"
          cols="30"
          rows="10"
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <div className="text-center">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
