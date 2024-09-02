import React from 'react'
import BookSingleCard from './BookSingleCard'


const BooksCard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4'>
        {books.map((item) => (
          <BookSingleCard key={item._id} books={item}/> 
        ))}
    </div>
  )
}

export default BooksCard