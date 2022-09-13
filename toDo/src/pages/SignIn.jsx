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
      <div className='signCont'>
        <div className='signForm'>
            <input id='emailSignIn' placeholder='EMAIL'/>
            <br/>
            <input id='passwordSignIn' type='password' placeholder='PASSWORD'/>
            <button onClick={singIn} style={{textDecoration:"underline"}}>Sign In</button>
        </div>
      </div>
    )
}

export default SignIn;
