import React , { useState , useEffect } from 'react';



var itemArray = new Array(9).fill("empty")  

const App = () => {
  const [isCross , setIsCross] = useState(true)
  const [ winMessage , setWinMessage] = useState("")

  // 0 1 2
  // 3 4 5
  // 6 7 8

  const checkWinner = () => {
     if( itemArray[0]!=="empty" &&  itemArray[0]===itemArray[1]     &&  itemArray[1]===itemArray[2] ){
              setWinMessage(isCross?"Circle wins":"Cross wins")
     }
     else if( itemArray[3]!=="empty" &&  itemArray[3]===itemArray[4] &&  itemArray[4]===itemArray[5] ){
              setWinMessage(isCross?"Circle wins":"Cross wins")
     }   
    else if( itemArray[6]!=="empty" &&  itemArray[6]===itemArray[7] &&  itemArray[7]===itemArray[8] ){
              setWinMessage(isCross?"Circle wins":"Cross wins")
    }   
    else if( itemArray[0]!=="empty" &&  itemArray[0]===itemArray[3] &&  itemArray[3]===itemArray[6] ){
              setWinMessage(isCross?"Circle wins":"Cross wins")
    }   
    else if( itemArray[0]!=="empt1" &&  itemArray[1]===itemArray[4] &&  itemArray[4]===itemArray[7] ){
              setWinMessage(isCross?"Circle wins":"Cross wins")
    }   
    else if( itemArray[2]!=="empty" &&  itemArray[2]===itemArray[5] &&  itemArray[5]===itemArray[8] ){
              setWinMessage(isCross?"Circle wins":"Cross wins")
    }   
    else if( itemArray[0]!=="empty" &&  itemArray[0]===itemArray[4] &&  itemArray[4]===itemArray[8] ){
              setWinMessage(isCross?"Circle wins":"Cross wins")
    }
    else if( itemArray[2]!=="empty" &&  itemArray[2]===itemArray[4] &&  itemArray[4]===itemArray[6] ){
              setWinMessage(isCross?"Circle wins":"Cross wins")
    }   

  }

  const handleChange = () => {

  }
  


  return (
    <h1>TIC TAC TOE</h1>


  )
}


export default App;