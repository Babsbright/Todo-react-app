import React from 'react'

const Form = ({inputText, setStatus, setInputText, todos, setTodos}) => {
    

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

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
return(
    <form action="">
      
    <input value={inputText} onChange={textHandler} className="todo-input" type="text"/>
    <button onClick={submitHandler} className="todo-button"><i className="fas fa-plus"></i></button>
   <div className="select">
    <select
    
    onChange={statusHandler}
    name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
   
   
       </select>
   </div>



   </form>
)
}

export default Form