import React, { useEffect } from "react";
import { TodoContext } from "../TodoContext";
import { TodoTag } from "../TodoTag";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [newCategoryValue, setNewCategoryValue] = React.useState("");
  const [CategoriesList,setCategoriesList] = React.useState([])
  const [isTodoTag, setTodoTag] = React.useState(false);

  const DetectEvents = (event) => {
    if (event.keyCode === 32) {
      setTodoTag(true);
      console.log("WAS PRESSED THE SPACE KEY");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (newTodoValue === "") {
      setOpenModal(false);
    } else {
      addTodo(newTodoValue, newCategoryValue);
      setOpenModal(false);
    }
  };
  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };
  const onChangeCategory = (event) => {
    const arrayCategories = event.target.value.split(",");
    if (!arrayCategories.includes(" ")) {
      setNewCategoryValue(arrayCategories);
    }
  };

  const onChangeTodo = (event) => {
    setNewTodoValue(event.target.value);
  };
  const addCategory = (event) =>{
    event.preventDefault()
    console.log(newCategoryValue.length)
    const newCategories = [...CategoriesList]

    newCategories.unshift(...newCategoryValue)
    setCategoriesList(newCategories)
    
    setNewCategoryValue('')

    setTodoTag(false)
  }
  useEffect(() => {
    console.log("Categories List", CategoriesList);
  }, [CategoriesList]);

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <label>Escribe tu nuevo TODO</label>
          <textarea
            placeholder="Estudiar Full Stack Development"
            value={newTodoValue}
            onChange={onChangeTodo}
          />

          <div className="TodoForm-buttonContainer"></div>
          <button
            type="button"
            className="TodoForm-button TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Añadir TODO
          </button>
        </form>
        <div className="container">
      <textarea
        onKeyUpCapture={DetectEvents}
        placeholder="Category"
        value={newCategoryValue}
        onChange={onChangeCategory}
        className="input"
      />
      <button className="button" onClick={addCategory}>Add category</button>
      {isTodoTag && newCategoryValue.map((category, index) => (
        <TodoTag key={index} text={category} index={parseInt(index) + 1} />
      ))}
      {CategoriesList.length > 0 && CategoriesList.map((category, index) => (
        <TodoTag key={index} text={category} index={parseInt(index) + 1} />
      ))}
    </div>
      </section>
    </>
  );
}




export { TodoForm };

// <textarea
// onKeyUpCapture={DetectEvents}
// placeholder = "Category"
// value={newCategoryValue}
// onChange={onChangeCategory}
// />
// {isTodoTag && newCategoryValue.map((category,index)=>(
//     <TodoTag text={category} index={parseInt(index)+1}/>
// ))}
