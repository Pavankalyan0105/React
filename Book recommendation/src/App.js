import React , {useState} from 'react';
import "./styles.css";
import JSBooks from './Components/JSBooks';
import OSBooks from './Components/OSBooks';
import DBMSBooks from './Components/DBMSBooks';




export default function App() {

  const [books , setBooks] = useState()

  const display = (subject) => {
    if(subject === "JS")         setBooks(<JSBooks/>);
    else if(subject === "OS")    setBooks(<OSBooks/>);
    else if(subject === "DBMS")  setBooks(<DBMSBooks/>);
}

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started </p>
      <div className="buttons">
          <button onClick = { () =>  display("JS")}> Javascript </button>
          <button onClick = { () =>  display("OS")}> Operating System </button>
          <button onClick = { () =>  display("DBMS")}> DBMS </button>
     </div>

    {books}

    </div>
  );
}
