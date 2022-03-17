import React, {useState} from 'react'

const Form = ({inputText, setInputText, todos, setTodos}) => {
    

    const textHandler = (e) => {
     setInputText(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text : inputText, isCompleted: false, key: Math.random()*1000}
        ])
        setInputText('')
    }
return(
    <form action="">
    <input value={inputText} onChange={textHandler} className="todo-input" type="text"/>
    <button onClick={submitHandler} className="todo-button"><i className="fas fa-user"></i> add</button>
   <div className="select">
    <select
    
    
    name="todos" className="filter-todo">


        <option value="all">All</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
   
   
       </select>
   </div>



   </form>
)
}

export default Form