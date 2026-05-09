import { useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:'Go to gym',
      description : 'PUSH day',
      status : true
    },
    {
      id:2,
      title:'Clean your room',
      description : 'do it before evening',
      status : false
    },
    {
      id:3,
      title:'Complete Todo Project',
      description : 'do it before evening',
      status : false
    }
  ])

  // Methods on ToDo
  const toggleCompleted = (id) => {
    todos.map((todo) => {
      setTodos(todos.map( (todo) => {
        if (todo.id === id) {
          return {...todo, status : !todo.status}
        } else {
          return todo
        }
      } ))
    })
  }

  const getnNewTodoId = () => todos.length + 1

  const addNewTodo = (todoData) => {
    todoData.id = getnNewTodoId()
    todoData.status = false
    setTodos([...todos, todoData])
    console.log(todos)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter( (todo) => todo.id !== id))
  }

  return (
    
    <div
    className="min-h-screen w-full overflow-x-hidden bg-[#001f21] text-[#ff7a61] flex justify-center items-center">
      <Wrapper>
        <AddTodo addNewTodo={addNewTodo}/>
        <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
      </Wrapper>
    </div>
  );
}

export default App;
