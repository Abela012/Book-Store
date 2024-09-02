import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton.jsx'
import Spinner from '../components/Spinner.jsx'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditBook = () => {
  const [title, settitle] = useState("")
  const [author, setauthor] = useState("")
  const [publishYear, setpublishYear] = useState("")
  const [loading, setloading] = useState()
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()
  const {id} = useParams();
  useEffect(() => {
    setloading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setauthor(response.data.author)
      setpublishYear(response.data.publishYear)
      settitle(response.data.title)
      setloading(false)
    }).catch((error) => {
      setloading(false)
      alert('an error happend. Please Check console')
      console.log(error);
      
    })
  },[])
const handleEditBook = () =>{
  const data = {
    title,
    author,
    publishYear
  }
  setloading(true)
  axios.put(`http://localhost:5555/books/${id}`,data)
  .then(() => {
    setloading(false)
    enqueueSnackbar('book created successfully', {variant: 'success'})
    navigate('/')
  })
  .catch((error) => {
    setloading(false)
    // alert('An error happend, please check console')
    enqueueSnackbar('error', {variant: 'error'})
    console.log(error);
    
  })
  
}

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3x1 my-4'>Edit Book</h1>
      {loading? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Title</label>
          <input type="text" value={title || ""} onChange={(e) => {settitle(e.target.value); console.log(e.target.value)}}
          className='border-2 border-grey-500px-4 py-2' />
        </div>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Author</label>
          <input type="text" value={author || ""} onChange={(e) => setauthor(e.target.value)} className='border-2 border-grey-500px-4 py-2' />
        </div>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Publish Year</label>
          <input type="text" value={publishYear || ""} onChange={(e) => setpublishYear(e.target.value)} className='border-2 border-grey-500px-4 py-2' />
        </div>
        <button className='p-2 bg-sky-300 m-8 ' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default EditBook
