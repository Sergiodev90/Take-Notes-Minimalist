import "./TodoSearch.css";
import React, { useEffect, useState } from "react";

function TodoSearch({SearchValue, setSearchValue,categories}) {
  const [isExpanded, setIsExpanded] = useState(false);

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
        icon.style.rotate = list.classList.contains("show") ? "-180deg" : "0deg";
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
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
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
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <button
        className="expand-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <i className={`fa-solid ${isExpanded ? 'fa-times' : 'fa-magnifying-glass'}`}></i>
      </button>
    </div>
    </>
  );
}

export { TodoSearch };


// {/* <div className="dropdown">
// <div id="drop-text" className="dropdown-text">
//   <span id="span">Everything</span>
//   <i id="icon" className="fa-solid fa-chevron-down"></i>
// </div>

// <ul id="list" className="dropdown-list">
//   {categories &&categories.map((category)=>(
//     <li className="dropdown-list-item" key={category.id}>{category.category}</li>
//   ))}
//   {/* <li className="dropdown-list-item">Everything</li>
//   <li className="dropdown-list-item">Videos</li>
//   <li className="dropdown-list-item">Community</li>
//   <li className="dropdown-list-item">Playlists</li>
//   <li className="dropdown-list-item">Shorts</li> */}
// // </ul>
// // </div> */}