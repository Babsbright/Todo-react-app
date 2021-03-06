import React from "react";
import Todo from "./todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
      <ul className="todo-list">
              {filteredTodos.map(todo => (
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