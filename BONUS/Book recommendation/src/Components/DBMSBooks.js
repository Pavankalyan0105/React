import React from "react";
import Book from "./Book";

const books = [
  {
    name: "Raghu Ramakrishnan",
    rating: "4.5/5"
  },
  {
    name: " Peter Rob",
    rating: "3.6/5"
  }
];

const DBMSBooks = () => {
  return (
    <div className="books">
      {books.map((book, idx) => {
        return <Book bookName={book.name} rating={book.rating} />;
      })}
    </div>
  );
};

export default DBMSBooks;
