import React, { useEffect } from "react";
import { TodoContext } from "../TodoContext";
import { TodoTag } from "../TodoTag";
import { TodoCalendar } from "../TodoCalendar";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [newCategoryValue, setNewCategoryValue] = React.useState("");
  const [CategoriesList, setCategoriesList] = React.useState([]);
  const [userJoking, setUserJoking] = React.useState(false);


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
    let arrayCategories;
    for (let i = 0; i < event.target.value.length; i++) {
      if (event.target.value[i] === ",") {
        if (event.target.value[i + 1] === ",") {
          setUserJoking(true);
          break;
        }
      }
      setUserJoking(false);
    }
    if (!userJoking) {
      arrayCategories = event.target.value.split(",");
    } else {
      arrayCategories = event.target.value.split(", ");
    }
    setNewCategoryValue(arrayCategories);

    console.log(arrayCategories);
  };

  const onChangeTodo = (event) => {
    setNewTodoValue(event.target.value);
  };
  const addCategory = (event) => {
    event.preventDefault();
    console.log(newCategoryValue.length);
    const newCategories = [...CategoriesList];

    newCategories.unshift(...newCategoryValue);
    setCategoriesList(newCategories);

    setNewCategoryValue("");

  };
  useEffect(() => {
    console.log("Categories List", CategoriesList);
  }, [CategoriesList]);

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          {/* <label></label> */}
          <textarea
            className="Text-Area__Todo"
            placeholder="Estudiar Full Stack Development"
            value={newTodoValue}
            onChange={onChangeTodo}
          />

          <div className="container_TodoTag_TodoCalendar">
            <div className="container_TodoTag__TODO">
              <textarea
                placeholder="Category"
                value={newCategoryValue}
                onChange={onChangeCategory}
                className="Text-Area__Category"
              />
              <button className="button_add--category" onClick={addCategory}>
                Add category
              </button>
              <div className="Container-TodoTag">

              {CategoriesList.length > 0 &&
                CategoriesList.map((category, index) => (
                  <TodoTag
                    key={index}
                    text={category}
                    index={parseInt(index) + 1}
                    className="TodoTag__Category"
                  />
                ))}
              </div>
            </div>
            <div className="container-Calendar__TODO">
              <TodoCalendar />
            </div>
          </div>

          <div className="TodoForm-buttonContainer">
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
          </div>
        </form>
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
