import React, { useEffect, useState} from "react";
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
  const [color, setColor] = useState('#e0e0e0');
  const [selectedTagId, setSelectedTagId] = useState(null); // Estado para el Tag seleccionado



  const RandomId = () =>{
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }



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
    
    let dict=[]
    newCategoryValue.forEach(element => {
        dict = [...dict, {id:RandomId(),category:element, color:color}]
    });
    console.log("ESTE DEBERIA DE SER EL OBJETO",dict)
    setCategoriesList([...CategoriesList, ...dict])
    setNewCategoryValue("");

  };
  const handleTagClick = (id) => {
    setSelectedTagId(id === selectedTagId ? null : id); // Alterna entre seleccionar y deseleccionar un tag
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    setCategoriesList(
      CategoriesList.map((item) =>
        item.id === selectedTagId ? { ...item, color: color.hex } : item
      )
    );
  };

  const handleDelete = (id) =>{
    const newCategories = CategoriesList.filter((item) => item.id !== id);
    setCategoriesList(newCategories);
  }

  useEffect(()=>{
    console.log("Aqui esta la lista de categorias",CategoriesList)
  },[CategoriesList])
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

              {CategoriesList &&
                CategoriesList?.map((item) => (
                  <TodoTag
                  key={item.id}
                  id={item.id}
                  text={item.category}
                  color={item.color}
                  isSelected={item.id === selectedTagId}
                  handleClick={handleTagClick}
                  handleColorChange={handleColorChange}
                  handleDelete={handleDelete}
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
