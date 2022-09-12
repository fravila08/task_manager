import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';

function SeeDetails({setShowDeets, showDeets, myItemId}){

    

    return(
    <OverlayTrigger
          key={"details"}
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              See Details
            </Tooltip>
          }
        >
        <Button variant="outline-secondary"
        onClick={()=>setShowDeets(myItemId)} >📋</Button>
    </OverlayTrigger>
    )
}

export default SeeDetails;