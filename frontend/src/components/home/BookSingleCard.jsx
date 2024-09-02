import React from 'react'
import { Link } from 'react-router-dom'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle, BiShow} from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { useState } from 'react'
import BookModal from './BookModal'

const BookSingleCard = ({books}) => {
    const [showModal, setshowModal]  = useState(false)

  return (
    <div 
    key={books._id} className='border-2 border-gray-500 rounded-1g px-4 py-2 m-4 relative hover:shadow-x1'>
     <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 roundeed-1g'>
      {books.publishYear}
     </h2>
     <h4 className='mu-2 text-grey-500 '>
      {books._id}
     </h4>
       <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2x1'/>
        <h2 className='my-1'>{books.title}</h2>    
       </div>
       <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2x1'/>
        <h2 className='my-1'>{books.author}</h2>
       </div>
       <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow className='text-3x1 text-blue-800 hover:text-black cursor-pointer'
        onClick={() => setshowModal(true)}/>
        <Link to={`/books/details/${books._id}`}>
          <BsInfoCircle className='text-2x1 text-green-800 hover:text-black'/>
        </Link>
        <Link to={`/books/edit/${books._id}`}>
        <AiOutlineEdit className='text-2x1 text-yellow-600 hover:text-black'/>

        </Link>
        <Link to={`/books/delete/${books._id}`}>
        <MdOutlineDelete className='text-2x1 text-red-600 hover:text-black'/>
        </Link>

       </div>
       {
        showModal && (
            <BookModal book={books} onClose={() => setshowModal(false)}/>
        )
       }
    </div>
  )
}

export default BookSingleCard