import React from "react";

const Todo =({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
setTodos(
    todos.filter((val) => val.key !== todo.key))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return{
                    ...item, isCompleted : !item.isCompleted
                }
            }
            return item
        }))
    }
    return (
<div className="todo">
  <li className="todo-item">{text}</li>
  <button onClick={completeHandler} className="complete-button">C</button>
  <button onClick={deleteHandler} className="trash-button">T</button>
</div>
    )
}

export default Todo