import React from "react";
import Book from './Book';

const books = [
  {
    name:"Eloquent JavaScript",
    rating:"4.5/5"
  },
  {
    name:"You Don't Know JS",
    rating:"4.2/5"
  }
]

const JSBooks = () => {
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

export default JSBooks;