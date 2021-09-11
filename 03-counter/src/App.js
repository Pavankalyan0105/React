import React , {useState} from 'react';
import './style.css';


function App(){

    const [count ,setCount] = useState(0)
    return (
        <div className="App">
            <h1>Counter Value is {count}</h1>
            <div className = "Buttons">
            <button className = "de-btn btn" onClick={ () => count <=0 ? "" : setCount( count - 1 )}> Decrease </button>
            <button className = "re-btn btn" onClick={ () => setCount( 0 )}> Reset </button>
            <button className = "in-btn btn" onClick={ () => count>=10 ?""  : setCount( count + 1 )}> Increase </button>
            </div>
           

        </div>
    )
}
export default App;