import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext';
function TodoSearch() {
  const { SearchValue,setSearchValue } = React.useContext(TodoContext);
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value = {SearchValue}
      onChange = {(event) => {

        setSearchValue(event.target.value);

      }}
    />
  );
}

export { TodoSearch };
