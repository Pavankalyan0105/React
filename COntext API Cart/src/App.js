import React, {useState, createContext} from 'react';
import Display from './Display';
import Count from './Count';

export const store = createContext();

const App = () => {
    const [data , setData] = useState([
        {
            brandname:'apple'
        },
        {
            brandname:'micorsoft'
        },
        {
            brandname:'linkedin'
        }
    ])
    return (


        <store.Provider value = {[data , setData]}>
            <div>
                <Count />
                <Display />
            </div>
        </store.Provider>
        
    )
}

export default App;