import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function NewTaskLabel({setShowModal}){
    return(
    <OverlayTrigger
          key={"details"}
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              Add Task
            </Tooltip>
          }
        >
        <Button variant="outline-success" className='newTaskLabel' onClick={()=>setShowModal(true)}>➕</Button>
    </OverlayTrigger>
    )
}

export default  NewTaskLabel;