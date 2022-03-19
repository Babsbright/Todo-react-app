import React, {useState, useEffect} from 'react';
import Form from './components/form';
import TodoList from './components/todoList';
import './App.css';
function App() {
  //STATES

  const[inputText, setInputText] = useState('')
  const[todos, setTodos] = useState([])
  const[status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

//USE EFFECT

useEffect(() => {
getLocalTodos()
}, [])
useEffect(() => {
  filterHandler()
  saveLocalTodos()
}, [status, todos])

//FUNCTIONS

const filterHandler = (e) => {
  switch (status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.isCompleted === true))
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.isCompleted === false))
      break;
  
    default :
    setFilteredTodos(todos);
      break;
  }
}
//SAVE TO LOCAL STORAGE
const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }


const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]))
  }else{
   let todoLocal = JSON.parse(localStorage.getItem("todos"))
   setTodos(todoLocal);
}
}
  return (
    <div className="App">
      <header>
        <h1>Today's tasks</h1>
     
      </header>
      <Form inputText={inputText}
       setInputText = {setInputText}
        todos ={todos}
         setTodos = {setTodos}
        setStatus = {setStatus}
        filteredTodos = {filteredTodos}
         />
      <TodoList todos = {todos}
       setTodos = {setTodos}
       filteredTodos = {filteredTodos}
       />
       
    </div>
  );
}

export default App;
