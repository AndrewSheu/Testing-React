import React from "react";
import useFetch from "../Hooks/useFetch";

function Menu() {
  const [menu] = useFetch("http://localhost:8000/menu");

  return (
    <div className="box">
      <h2>菜單</h2>
      <div className="menu-container">
        {menu && // make sure the data have recieved
          menu.map((item) => (
            <div key={item.title}>
              <img
                src={item.img}
                alt={item.title}
                className="menu-img"
                width={"300px"}
              />
              <div className="menu-content">
                <p className="menu-title">{item.title}</p>
                <p className="menu-text">$ {item.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Menu;
