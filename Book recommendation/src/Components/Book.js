import React from "react";

const Book = ({ bookName, rating }) => {
  return (
    <div className="book">
      <h3>{bookName}</h3>
      <p>{rating}</p>
    </div>
  );
};

export default Book;
