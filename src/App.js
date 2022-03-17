import React, {useState} from 'react';
import Form from './components/form';
import TodoList from './components/todoList';
import './App.css';
function App() {
  const[inputText, setInputText] = useState('')
  const[todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Tolu's Todo List</h1>
     
      </header>
      <Form inputText={inputText} setInputText = {setInputText} todos ={todos} setTodos = {setTodos} />
      <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
