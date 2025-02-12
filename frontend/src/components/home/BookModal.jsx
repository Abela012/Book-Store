import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModal = ({book, onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        <div className='w-[600px] max-w-full h-[400px] bg-white rounded-x1 p-4 flex-col relative'
        onClick={(event) => event.stopPropagation()}>
        <AiOutlineClose className='absolute right-6 top-6 text-3x1 text-red-600 cursor-pointer' onClick={onClose}/>
    <h2 className='w-fit px-4 py-1 bg-red-300 roundeed-1g'>
      {book.publishYear}
     </h2>
     <h4 className='mu-2 text-grey-500 '>
      {book._id}
     </h4>
       <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2x1'/>
        <h2 className='my-1'>{book.title}</h2>    
       </div>
       <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2x1'/>
        <h2 className='my-1'>{book.author}</h2>
       </div>
       <p className='my-2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia voluptatibus et nobis suscipit laudantium veniam perferendis voluptates assumenda! Perferendis error mollitia sapiente at reiciendis eius nulla autem ea tempore.
       </p>
        </div>
    </div>
  )
}

export default BookModal