import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewTaskLabel from './NewTaskLabel';

function NavBaar({setShowModal, user}){

    return(
        <Navbar class="myNav" >
            <Nav class="myNav">
                <Nav.Link href="/">
                    <div className='link' >
                        <p  >DASHBOARD</p>
                    </div>
                </Nav.Link>
                <Nav.Link href="/#/toDo">
                    <div className='link' >
                        <p >TASKS</p>
                    </div>
                </Nav.Link>
                <Nav.Link href='/#/done'>
                    <div className='link' >
                        <p>COMPLETED TASKS</p>
                    </div>
                </Nav.Link>
                {user ?<div style={{position:"absolute", right:"0", marginRight:"2vw"}}> <NewTaskLabel setShowModal={setShowModal}/></div>: 
                <Nav.Link href='#/signIn'>
                    <div className='link'>
                        <p>Sign in to add Task</p>
                    </div>
                </Nav.Link>}
            </Nav>
        </Navbar>
    )
}

export default NavBaar;