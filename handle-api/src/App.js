import React , {useState , useEffect} from 'react';
import axios from 'axios';
import MyCard from './MyCard';
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
    const [details , setDetails] = useState({})
    const fectchDetails = async () => {
        const {data} = await axios.get("https://randomuser.me/api/");
        const details = data.results[0];
        // console.log(details);

        
        setDetails(details);
    }

    useEffect( ( ) => {
        fectchDetails();
    } , []);

    return (
        <Container fluid className="p-4 Dark App">
            <Row className="cen">
                <Col md={4} className="offset-md-4" mt-4>
                     <MyCard details={details}/>
                </Col>    
            </Row>                
        </Container>
    )
}

export default App;