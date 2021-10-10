import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import './App.css';

const MyCard = ({ details }) => {
  return (
    <Card id="Card">
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h3>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h3>
          <p ><span className="blue">{details.email}</span></p>
          <p className="age"><span className="green"> AGE : {details.dob?.age}</span></p>
        </CardTitle>
        <CardText>
          
          <p><span className="blue"><FaMapMarkedAlt />  { details.location?.city}</span></p>
          <p><span className="green"><FaPhone/>  {details.phone}</span></p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;