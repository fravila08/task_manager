import axios from 'axios'

function SignUp(){
    function signUp(){
        // this will come into effect once the it's a form to submit not a button you'll use get elementbyid().value to get the form values
        event.preventDefault()
        let name=document.getElementById('name').value
        let email=document.getElementById('email').value
        let password=document.getElementById('password').value
        axios.post('/sign_up', {
          name: name,  
          email: email, 
          password: password
        }).then((response)=>{
          document.location.href='/#/signin'
          console.log('response from server: ', response)
        })
      }
      return(
        <div className='holdingList'>
          <form className='theListForm' onSubmit={signUp} style={{height:"40vh"}}>
              <label><h3>First Name</h3></label>
              <input  className='textInput' id='name' placeholder='ex: pancho'/>
              <label><h3>Email</h3></label>
              <input  className='textInput' id='email' placeholder='ex: pancho@gmail.com'/>
              <label><h3>Password</h3></label>
              <input  className='textInput' id='password' type="password" placeholder='PASSWORD'/>
              <input type="submit" className='submitButton'  placeholder="Sign Un" />
          </form>
        </div>
      )
}

export default SignUp;