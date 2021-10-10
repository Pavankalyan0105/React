import React,{useContext} from 'react';
import {store} from './App';


const Count = () => {
    const [data , setData] = useContext(store);
    return (
    <h1>
        Count : {data.length}
    </h1>
    )
}

export default Count;