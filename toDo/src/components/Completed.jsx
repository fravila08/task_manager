import axios from 'axios';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CompletedThisTask({itemId}){
    const completeThisTask=(id)=>{
        axios.put("completeThisTask",{
            myItemId: id
        }).then((response)=>{window.location.reload()})
    }

    return(
    <OverlayTrigger
          key={"erasing"}
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              Complete Task?
            </Tooltip>
          }
        >
        <Button variant="outline-success" onClick={()=>completeThisTask(itemId)}>✅</Button>
    </OverlayTrigger>
    )
}

export default CompletedThisTask;