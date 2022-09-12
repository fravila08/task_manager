import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewTaskLabel from './NewTaskLabel';

function NavBaar({setShowModal}){

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
                <div 
                style={{width:"3vw", height:"3vw", position:"absolute", right:"0", marginRight:"1vw"}}
                > 
                    <NewTaskLabel setShowModal={setShowModal}/>
                </div>
            </Nav>
        </Navbar>
    )
}

export default NavBaar;