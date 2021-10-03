import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title="Berlin" buttonText="GO" />
          </div>

          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
            <Card title="Tokyo" buttonText="GO" />
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
            <Card title="Nairobi" buttonText="GO" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;