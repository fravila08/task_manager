import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Headers'
import NavBaar from './components/NavBar'
import DashBoard from './pages/DashBoard.jsx'
import ToDo from './pages/ToDo'
import Done from './pages/Done'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
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
  const [user, setUser] = useState(null)

  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }

  async function curr_user(){
    const response = await axios.get('curr_user')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

  useEffect(()=>{
    curr_user()
  },[])
    
    const [allMeals, setAllMeals]=useState([])
    const getMealById=(meal_id)=>{
      return meal[meal_id]
    }

  const deleteTask=(itemId)=>{
    axios.delete(`deleteTask/${itemId}`).then((response)=>{
        alert("item deleted")
        window.location.reload()
    })
  }

  return (
    <div className="App">
      {user ?
          <div className='upRight' >
            <p style={{textDecoration:"none", color:"white"}} >Welcom {user && user.name}</p>
            <a href="#" onClick={signOut}  style={{textDecoration:"none", color:"white"}} ><strong>Sign Out</strong></a>
          </div> :
          <div className="upRight" >
            <a href="#/signUp" style={{textDecoration:"none", color:"white"}} ><strong>Sign Up</strong></a>
            <a href="#/signIn" style={{textDecoration:"none", color:"white"}} ><strong>Sign In</strong></a> 
          </div> }
      <Header />
      <NavBaar setShowModal={setShowModal} user={user}/>
      <NewTask
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/toDo" element={<ToDo deleteTask={deleteTask}  />} />
          <Route path='/done' element={<Done deleteTask={deleteTask} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
