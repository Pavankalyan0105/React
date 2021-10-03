import React , {useState} from 'react';
import Icon from './components/icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card , CardBody , Container , Button , Row , Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

var itemArray = new Array(9).fill("empty")

var currentStep = 0;
var steps = [new Array(9).fill("empty") ];

function App() {

  const [ isCross , setIsCross] = useState(false)
  const [winMessage , setWinMessage] = useState("")



  const reloadGame = () => {
        setWinMessage("");
        setIsCross(false);
        itemArray.fill("empty" , 0 , 9);
  };



  const checkIsWinner = () => {

    if( itemArray[0]!=="empty" && itemArray[0]===itemArray[1] && itemArray[1]===itemArray[2])
                setWinMessage( isCross?"circle won":"cross win");

    else if( itemArray[3]!=="empty" && itemArray[3]===itemArray[4] && itemArray[4]===itemArray[5])
                setWinMessage( isCross?"circle won":"cross win");

    else if( itemArray[6]!=="empty" && itemArray[6]===itemArray[7] && itemArray[1]===itemArray[8])
                setWinMessage( isCross?"circle won":"cross win");


    else if( itemArray[0]!=="empty" && itemArray[0]===itemArray[3] && itemArray[3]===itemArray[6])
                setWinMessage( isCross?"circle won":"cross win");

    else if( itemArray[1]!=="empty" && itemArray[1]===itemArray[4] && itemArray[4]===itemArray[7])
                setWinMessage( isCross?"circle won":"cross win");

    else if( itemArray[2]!=="empty" && itemArray[2]===itemArray[5] && itemArray[5]===itemArray[8])
                setWinMessage( isCross?"circle won":"cross win");



    else if( itemArray[0]!=="empty" && itemArray[0]===itemArray[4] && itemArray[4]===itemArray[8])
                setWinMessage( isCross?"circle won":"cross win");
    
    else if( itemArray[2]!=="empty" && itemArray[2]===itemArray[4] && itemArray[4]===itemArray[6])
                setWinMessage( isCross?"circle won":"cross win");

  };

  const changeItem = (index) => {
      if(winMessage)
        return toast( winMessage , {type:"success"});

      if( itemArray[index] === "empty"){
          itemArray[index] = isCross ? "circle":"cross" ;
          setIsCross(!isCross);
      }
      else{
        return toast( "Already filled !!" , {type:"error"})
      }

      const temp = itemArray.slice();
      steps.push(temp);
      currentStep+=1;

      checkIsWinner();
  };


  return (
    <Container className = "p-5">
      <ToastContainer position = "bottom-center"/>
        <Row>
          <Col md={6} className = "offset-md-3">

            {winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-success text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button
                className="text-center col-12"
                  color = "success"
                  block
                  onClick = {reloadGame}
                >Reload the Game </Button>
              </div>
            ):
              <h1 className="text-center text-warning">
                {isCross?"circle":"cross"} turn
              </h1>
            }

              <div className="grid">
                {itemArray.map( (item , index) => (
                  <Card color = "warning" onClick = { () => changeItem(index)}>
                    <CardBody className="box">
                      <Icon name={item}/>
                    </CardBody>
                  </Card>
                ))}
              </div>

              <button onClick = { () => {
                if(currentStep === 0) 
                  return toast("You have reached the first step" , {type:"error"});
                setIsCross(!isCross);
                currentStep-=1;
                itemArray = steps[currentStep].slice();
                steps.pop();
                console.log(steps);
              }
            }> Prev Step </button>
          </Col>
        </Row>

    </Container>
  );
}

export default App;
