import React , {useState} from 'react';

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
            newList.push({value :inputValue , isDone:false });
            setTodoList(newList);            
        }
        else{
            console.log("please enter some value");
        }
    }

    const remove = () => {
        var newList = todoList.filter( (item , idx) => {
            return !(item.isDone);
        })
        setTodoList(newList);
        console.log(inputValue);
    }



    return (
        <div>
            <h1>TODO APP</h1>
            <div>
                <input type="text" onChange = {
                    (e) => {
                        setInputValue(e.target.value);
                    }
                }/>
                <button onClick = {addTodo}>
                    add todo
                </button>
            </div>
            <div>

            {
                todoList.map( (item , idx) => {
                    return <li key={idx}> <span> {item.value} <input type="checkbox"  placeholder="enter your todo" value = {inputValue} onChange = {
                        (e) => {
                            console.log(item.isDone);
                            if(e.target.checked){
                                item.isDone = true;
                            }
                            else{
                                item.isDone = false;
                            }
                        }
                    } /></span></li>
                })
            } 
            </div>
           
            <button onClick = { remove }>Remove Done todo</button>
        </div>
    )
}

export default App;