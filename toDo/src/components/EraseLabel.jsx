import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function EraseDetails({myItemId, deleteTask}){
    return(
    <OverlayTrigger
          key={"erasing"}
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              Delete Task
            </Tooltip>
          }
        >
        <Button variant="outline-secondary" onClick={()=>deleteTask(myItemId)} >🗑</Button>
    </OverlayTrigger>
    )
}

export default EraseDetails;