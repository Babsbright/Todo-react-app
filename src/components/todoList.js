import React from "react";
import Todo from "./todo";

const TodoList = ({todos, setTodos}) => {
    return(
        <div className="todo-container">
      <ul className="todo-list">
              {todos.map(todo => (
                  <Todo
                  todos = {todos}
                  setTodos = {setTodos}
                  todo ={todo}
                  text = {todo.text} key = {todo.key}/>
              ))}
        
      </ul>
        </div>
    )
}

export default TodoList