import axios from 'axios'

function SignIn(){
    function singIn(){
        event.preventDefault()
        let email= document.getElementById('emailSignIn').value
        let password= document.getElementById('passwordSignIn').value
        axios.post('/sign_in', {
          email: email, 
          password: password
        }).then((response)=>{
          console.log('response from server: ', response)
          window.location.href="/"
        })
    }
    return (
      <div className='holdingList'>
          <form onSubmit={singIn}  className='theListForm'>
            <label><h3>Email:</h3></label>
            <input id='emailSignIn' className='textInput' placeholder='EMAIL'/>
            <label><h3>Password:</h3></label>
            <input id='passwordSignIn' className='textInput' type='password' placeholder='PASSWORD'/>
            <input type="submit" className='submitButton'  placeholder="Sign In" />
          </form>
      </div>
    )
}

export default SignIn;
