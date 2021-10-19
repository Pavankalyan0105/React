import React , {useState} from 'react';
import './App.css';

function App(){

    const [todoList , setTodoList] = useState([
        {
            value:"Record a youtube video" , 
            isDone:false
        } ,
        {
            value:"Drinks 2 litres of water" , 
            isDone:false
        } , {
            value:"Solve 2 leetcode problems" , 
            isDone:false
        } 
    ])

    const [inputValue, setInputValue] = useState("")

    const addTodo = () => {
        if(inputValue){
            var newList = [...todoList];
            newList.push({value :inputValue , isDone:false , id:Date.now()});
            setTodoList(newList);            
        }
        else{
            console.log("please enter some value");
        }

        setInputValue("")
    }

    const remove = () => {
        var newList = todoList.filter( (item , idx) => {
            return !(item.isDone);
        })
        setTodoList(newList);
        console.log(inputValue);
    }

    const markComplete = (citem) => {
        const updated = todoList.map( (item, idx) => {
            if(item === citem) {
                item.isDone = !item.isDone;
            }
            return item;
        })

        setTodoList(updated);
        console.log(updated);
    }



    return (
        <div className="App">
            <div className="container">
            <h1>TODO APP</h1>
            <div className="form">
                <input type="text" value = {inputValue} onChange = {
                    (e) => {
                        setInputValue(e.target.value);
                    }
                }/>
                <button onClick = {addTodo}>
                ➕
                </button>
            </div>
            <div className="ul">

            {
                todoList.map( (item , idx) => {
                    return  <li
                        style={{
                            "text-decoration":(item.isDone)?"line-through":"none"
                        }}
                    
                    >{item.value} <span><button disabled={item.isDone} onClick={ () => markComplete(item) }> Completed</button></span></li>
                })
            } 
            </div>
           
            <button onClick = { remove }>Remove Completed todo</button>
            </div>
            
        </div>
    )
}

export default App;