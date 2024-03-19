import React from "react";
import { useState, useEffect } from "react";

function Menu() {
    const [menu, setMenu] = useState(null)
    
    useEffect(() => {
        fetch("http://localhost:8000/menu")
            .then((res) => {
                return res.json();
            })
            .then((data) =>{
                setMenu(data)
            })
    }, [])
    return (
        <div className="box">
            <h2>菜單</h2>
            <div className="menu-container">
                {menu && // make sure the data have recieved
                    menu.map((item) => (
                        <div key={item.title}>
                            <img src={item.img} alt={item.title} className="menu-img" width={"300px"}/>
                            <div className="menu-content">
                                <p className="menu-title">{item.title}</p>
                                <p className="menu-text">$ {item.price}</p>
                            </div>
                        </div>
                    )) 
                }
            </div>
        </div>
    )
}

export default Menu;