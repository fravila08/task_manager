import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Headers'
import NavBaar from './components/NavBar'
import DashBoard from './pages/DashBoard.jsx'
import ToDo from './pages/ToDo'
import Done from './pages/Done'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NewTask from './components/NewTask';
import axios from 'axios';


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken']= csrftoken


function App() {
  const [showModal, setShowModal]=useState(false)
  


  const deleteTask=(itemId)=>{
    axios.delete(`deleteTask/${itemId}`).then((response)=>{
        alert("item deleted")
        window.location.reload()
    })
  }

  return (
    <div className="App">
      <Header />
      <NavBaar setShowModal={setShowModal} />
      <NewTask
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/toDo" element={<ToDo deleteTask={deleteTask}  />} />
          <Route path='/done' element={<Done deleteTask={deleteTask} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
