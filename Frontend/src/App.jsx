import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import CheifPage from './Pages/CheifPage'
import IndividualBookPage from './Pages/IndividualBookPage'
import AddBookForm from './components/AddBookForm'
import UpdateBookDetails from './components/UpdateBookDetails'
import IssueBook from './components/IssueBook'


const App = () => {
  return (
    <Routes>
      <Route path= "/" element= {<LoginForm />} />
      <Route path= "/signup" element= {<SignUp />} />
      <Route path="/cheifpage" element= {<CheifPage />} />
      <Route path='/individualbookpage' element= {<IndividualBookPage />} />

      <Route path = '/add-book' element= {<AddBookForm />} />
      <Route path='/issue-book' element= {<IssueBook />} />
      <Route path='/edit-book' element={<UpdateBookDetails />}/>
    </Routes>
  )
}

export default App