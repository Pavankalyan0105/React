
import React from 'react';
import Button from './Button'
import './style.css'

const App = () => {
    return (
        <div>
            <h1 style = {{
                textAlign: 'center'
            }}>Hello pavan! </h1>

            <Button title="tokyo"/><br />
            <Button title="Berlin"/>

        </div>
        
    )
}

export default App;
