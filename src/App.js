import React,{useState,useEffect} from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './ToDo'
function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  useEffect(()=> {
    filterHandler();
  }, [todos,status])
  useEffect(()=>{
    getLocalTodos();
  }, [])
    const filterHandler =()=>{

      switch(status){
        case 'completed': setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
        case 'uncompleted': setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
        default: setFilteredTodos(todos)
        break
      }
    }
  const saveLocalTodos = (newTodos) => {
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
      setTodos([])
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }
  return (
    <div className='App'>
      <header>
        <h1>Todo List {inputText}</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      saveLocalTodos={saveLocalTodos}
      />
      <TodoList  filteredTodos={filteredTodos}  setTodos={setTodos} todos={todos} saveLocalTodos={saveLocalTodos}/>
    </div>
 )
}

export default  App