import React from "react";
import Book from "./Book";

const books = [
  {
    name: "Galvin",
    rating: "4.2/5"
  },
  {
    name: "William Stallings",
    rating: "3.7/5"
  }
];

const OSBooks = () => {
  return (
    <div className="books">
    {
    books.map( (book , idx) => {
      return (
        <Book bookName={book.name} rating = {book.rating}/>
      )
    })
  }
  </div>    
  )
}

export default OSBooks;
