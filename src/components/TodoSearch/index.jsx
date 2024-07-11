// import "./TodoSearch.css";
// import React, { useEffect } from "react";
// import { TodoContext } from "../TodoContext";

// function TodoSearch() {
//   const { SearchValue, setSearchValue } = React.useContext(TodoContext);

//   useEffect(() => {
//     const dropdownBtnText = document.getElementById("drop-text");
//     const span = document.getElementById("span");
//     const icon = document.getElementById("icon");
//     const list = document.getElementById("list");
//     const input = document.getElementById("search-input");
//     const listItems = document.querySelectorAll(".dropdown-list-item");

//     if (dropdownBtnText && icon && list) {
//       dropdownBtnText.onclick = function () {
//         list.classList.toggle("show");
//         icon.style.rotate = list.classList.contains("show") ? "-180deg" : "0deg";
//       };
//     }

//     window.onclick = function (e) {
//       if (
//         e.target.id !== "drop-text" &&
//         e.target.id !== "icon" &&
//         e.target.id !== "span" &&
//         list
//       ) {
//         list.classList.remove("show");
//         icon.style.rotate = "0deg";
//       }
//     };

//     if (listItems) {
//       for (let item of listItems) {
//         item.onclick = function (e) {
//           span.innerText = e.target.innerText;
//           if (e.target.innerText === "Everything") {
//             input.placeholder = "Search Anything...";
//           } else {
//             input.placeholder = "Search in " + e.target.innerText + "...";
//           }
//         };
//       }
//     }
//   }, []);

//   return (
//     <div className="search-bar">
//       <div className="dropdown">
//         <div id="drop-text" className="dropdown-text">
//           <span id="span">Everything</span>
//           <i id="icon" className="fa-solid fa-chevron-down"></i>
//         </div>
//         <ul id="list" className="dropdown-list">
//           <li className="dropdown-list-item">Everything</li>
//           <li className="dropdown-list-item">Videos</li>
//           <li className="dropdown-list-item">Community</li>
//           <li className="dropdown-list-item">Playlists</li>
//           <li className="dropdown-list-item">Shorts</li>
//         </ul>
//       </div>

//       <div className="search-box">
//         <input
//           type="text"
//           id="search-input"
//           placeholder="Search anything..."
//           value={SearchValue}
//           onChange={(event) => {
//             setSearchValue(event.target.value);
//           }}
//         />
//         <i className="fa-solid fa-magnifying-glass"></i>
//       </div>
//     </div>
//   );
// }

// export { TodoSearch };


import "./TodoSearch.css";
import React, { useEffect, useState } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { SearchValue, setSearchValue } = React.useContext(TodoContext);
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
            input.placeholder = "Search Anything...";
          } else {
            input.placeholder = "Search in " + e.target.innerText + "...";
          }
        };
      }
    }
  }, []);

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      <div className="dropdown">
        <div id="drop-text" className="dropdown-text">
          <span id="span">Everything</span>
          <i id="icon" className="fa-solid fa-chevron-down"></i>
        </div>
        <ul id="list" className="dropdown-list">
          <li className="dropdown-list-item">Everything</li>
          <li className="dropdown-list-item">Videos</li>
          <li className="dropdown-list-item">Community</li>
          <li className="dropdown-list-item">Playlists</li>
          <li className="dropdown-list-item">Shorts</li>
        </ul>
      </div>

      <div className="search-box">
        <input
          type="text"
          id="search-input"
          placeholder="Search anything..."
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
  );
}

export { TodoSearch };
