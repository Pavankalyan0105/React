import React , {useState , useEffect } from 'react';
import { Container  } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css' 

import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';


const App = () => {
  const [todoList , setTodoList] = useState([])

  useEffect(() => {
      const localTodos = localStorage.getItem("todos");
      setTodoList(JSON.parse(localTodos));
      console.log(todoList);
    } , [])


    const addTodos = (todoString) => {

      const newList = [...todoList];
      newList.push(todoString);
      setTodoList(newList);
    }

    useEffect( () => {
      localStorage.setItem("todos" , JSON.stringify(todoList));
    } , [todoList] )


    const markComplete = (id) => {
      const newList = todoList.filter( item => item.id !== id);
      setTodoList(newList);

  }
  return (
    <Container fluid>
    <Todos todos={todoList} markComplete={markComplete}/>
    <TodoForm addTodos={addTodos}/>
  </Container>
  )
}

export default App;

