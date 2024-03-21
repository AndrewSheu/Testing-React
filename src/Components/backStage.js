import React from "react";
import useFetch from "../Hooks/useFetch";

function BackStage() {

  const deleteMsg = (id) => {
    fetch(`http://localhost:8000/feedback/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log(`delete message id:${id}`);
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      // 處理錯誤情況
    });
  };

  const [ data ] = useFetch("http://localhost:8000/feedback");

  return (
    <div className="box">
      <h2>BackStage Area</h2>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>Name: {item.id}</p>
            <p>Email: {item.email}</p>
            <p>Message: {item.msg}</p>
            <button onClick={() => deleteMsg(item.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default BackStage;
