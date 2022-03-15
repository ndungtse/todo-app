import React from "react";
const Todo = ({text, todo, todos,setTodos, saveLocalTodos}) => {
    const deleteHandler = () => {
        let newTodos = todos
        newTodos = newTodos.filter((el)=> el.id !== todo.id)
        setTodos(newTodos)
        console.log(todos)
        console.log("New data", newTodos)
        saveLocalTodos(newTodos)
    }
   const completeHandler = () =>{
       setTodos(todos.map(item => {
           if(item.id === todo.id){
               return {
                   ...item, completed: !item.completed
               }
           }
           return item
       }))
   }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler}className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler}className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo