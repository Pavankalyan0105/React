import React,{useContext , useState} from 'react';
import {store} from './App';


const Display = () => {
    const [newBrand, setNewBrand] = useState()
    const [data, setData] = useContext(store);
    return (
    <h1>
        Display: 
        <h3>
            {data.map( (item,index)=>{
                return <p>{item.brandname}</p>
            })}

            <input onChange = {(event)=>{setNewBrand(event.target.value)}}type="text" placeholder="Add your brand"/>
            <button onClick = { () => (
                setData([...data , {brandname:newBrand}]))
            }>ADD</button>
        </h3>
    </h1>
    )
}

export default Display;