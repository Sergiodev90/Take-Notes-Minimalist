import React, { useContext, useEffect, useState } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";



function TodoSearch({ SearchValue, setSearchValue, categories }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {setSearchCategory} = useContext(TodoContext)

  const handleSendingValueCategory = (item) =>{
    setSearchCategory(item)
  }


  useEffect(() => {
    const dropdownBtnText = document.getElementById("drop-text");
    const span = document.getElementById("span");
    const icon = document.getElementById("icon");
    const list = document.getElementById("list");
    const input = document.getElementById("search-input");
    const listItems = document.querySelectorAll(".dropdown-list-item");

    if (dropdownBtnText && icon && list) {
      dropdownBtnText.onclick = function () {
        list.classList.toggle("show");
        icon.style.rotate = list.classList.contains("show")
          ? "-180deg"
          : "0deg";
      };
    }

    window.onclick = function (e) {
      if (
        e.target.id !== "drop-text" &&
        e.target.id !== "icon" &&
        e.target.id !== "span" &&
        list
      ) {
        list.classList.remove("show");
        icon.style.rotate = "0deg";
      }
    };

    if (listItems) {
      for (let item of listItems) {
        item.onclick = function (e) {
          span.innerText = e.target.innerText;
          if (e.target.innerText === "Everything") {
            input.placeholder = "Search";
          } else {
            input.placeholder = "Search in " + e.target.innerText + "...";
          }
        };
      }
    }
  }, []);

  return (
    <>
      <div className="search-bar-mobile">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className={`search-bar ${isExpanded ? "expanded" : ""}`}>
        {
          <div className="dropdown">
            <div id="drop-text" className="dropdown-text">
              <span id="span">TAGS</span>
              <i id="icon" className="fa-solid fa-chevron-down"></i>
            </div>

            <ul id="list" className="dropdown-list">
              {categories &&
                categories.map((category) => (
                  <li className="dropdown-list-item" key={category.id} onClick={() => handleSendingValueCategory(category.category)}>
                    {category.category}
                  </li>
                ))}
              {!categories && <p>No categories yet</p>}
            </ul>
          </div>
        }
        <div className="search-box">
          <input
            type="text"
            id="search-input"
            placeholder="Search"
            value={SearchValue}
            onChange={(event) => {
            setSearchValue(event.target.value);
            }}
          />
        </div>

        <button
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        ></button>
      </div>
    </>
  );
}

export { TodoSearch };
