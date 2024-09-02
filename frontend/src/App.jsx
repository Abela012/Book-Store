import React from 'react'
import {Routes, Route} from 'react-router-dom'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import Home from './pages/home'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/book/details/:id' element={<ShowBook/>}/>
      <Route path='/book/edit/:id' element={<EditBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App