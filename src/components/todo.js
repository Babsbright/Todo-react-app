import React from "react";

const Todo =({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
setTodos(
    todos.filter((val) => val.key !== todo.key))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.key === todo.key) {
                return{
                    ...item, isCompleted : !item.isCompleted
                }
            }
            return item
        }))
    }
    return (
<div className="todo">
  <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>{text}</li>
  <button onClick={completeHandler} className="complete-button"><i class ='fas fa-check'></i></button>
  <button onClick={deleteHandler} className="trash-button"><i class= 'fas fa-trash'></i></button>

</div>
    )
}

export default Todo