import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NewTask(props) {
    const [myDate, setMyDate]= useState()
    const [myTime, setMyTime]=useState()
    const [myAddress, setMyAddress]=useState()
    const [myTele, setMyTele]=useState()
    const [myEmail, setMyEmail]=useState()
    const [myUrl, setMyUrl]=useState()
    const [myTitle, setMyTitle]=useState()
    const [myDetails, setMyDetails]=useState()
    
    const dateChange= event=>{
        setMyDate(event.target.value);
        console.log('date', event.target.value)
    }
    const timeChange= event=>{
        setMyTime(event.target.value);
        console.log('time', event.target.value)
    }
    const addressChange= event=>{
        setMyAddress(event.target.value);
        console.log('address', event.target.value)
    }
    const teleChange= event=>{
        setMyTele(event.target.value);
        console.log('phone', event.target.value)
    }
    const emailChange= event=>{
        setMyEmail(event.target.value);
        console.log('email', event.target.value)
    }
    const urlChange= event=>{
        setMyUrl(event.target.value);
        console.log('url', event.target.value)
    }
    const titleChange= event=>{
        setMyTitle(event.target.value);
        console.log('title', event.target.value)
    }
    const detailChange= event=>{
        setMyDetails(event.target.value);
        console.log('details', event.target.value)
    }


    const addTask=()=>{
        axios.post("new_task",{
            date_for_event: myDate,
            time_for_event: myTime,
            address:myAddress,
            phone:myTele,
            email: myEmail,
            url: myUrl,
            title: myTitle,
            details: myDetails
        }).then((response)=>window.location.reload())
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          NEW TASK
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Information</h4>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{width:"70%"}}>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div className='inputItem'>
                        <label >Choose Date: </label><br/>
                        <input id="date" type="date" onChange={dateChange}/>
                    </div>
                    <div className='inputItem'>
                        <label >Choose Time: </label><br/>
                        <input id="time" type="time" onChange={timeChange} />
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div className='inputItem'>
                        <label >Address: </label><br/>
                        <input id="address" type="address" onChange={addressChange}/>
                    </div>
                    <div className='inputItem'>
                        <label >Contact: </label><br/>
                        <input id="phone" type="tel" onChange={teleChange} />
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div className='inputItem' >
                        <label >Email: </label><br/>
                        <input id="email" type="email" onChange={emailChange}/>
                    </div>
                    <div className='inputItem'>
                        <label >Url: </label><br/>
                        <input id="url" type="url" onChange={urlChange}/>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2vh"}}>
                <input style={{width:"40vw", marginBottom:"2vh"}} id="title" type="text" placeholder='Name of Task' onChange={titleChange}/>
                <textarea style={{width:"40vw", height:"30vh"}} id="details" placeholder='NOTES' onChange={detailChange}></textarea>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>Cancel</Button>
        <Button variant="success" onClick={addTask}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewTask;