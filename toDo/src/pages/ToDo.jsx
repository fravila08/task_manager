import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import SeeDetails from "../components/Label";
import EraseDetails from "../components/EraseLabel";
import CompletedThisTask from "../components/Completed";

function ToDo({deleteTask}){
    const [mytask, setMytask]=useState([])
    const [show,setShow]=useState(false)
    const [showDeets, setShowDeets]=useState()

    const getAllTask=async()=>{
        const response = await axios.get("allIncompleteTask")
        setMytask(response.data)
        setShow(!show)
    }
    useEffect(()=>{
        getAllTask()
    },[])
    
    return(
        <div className="holdingList">
            <div className="theList">
                <h3>ALL TASKS</h3>
                {show ?
                mytask.map((item)=>(
                    <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div className="itemRow">
                            <p className="dateItem">
                                Date: {item.date_for_event? item.date_for_event : "Unkown"} @ {item.time_for_event? item.time_for_event: "Unkown"}
                            </p>
                            <p className="titleItem">
                                {item.title}
                            </p>
                            <div>
                                <SeeDetails  setShowDeets={setShowDeets} myItemId={item.id} showDeets={showDeets}/>
                                <EraseDetails myItemId={item.id} deleteTask={deleteTask} />
                                <CompletedThisTask itemId={item.id}/>
                            </div>
                        </div>
                        {showDeets == item.id ? 
                        <div className="detailsContainer">
                            <ul style={{width:"47%", paddingLeft:"5vw"}}>
                                <li>Phone Number: {item.phone}</li>
                                <li>Address: {item.address}</li>
                                <li>Email: {item.email}</li>
                                <li>Event Url: {item.url}</li>
                            </ul>
                            <p style={{width:"50%"}}><strong>Notes</strong>
                            <br/>{item.details}</p>
                            <div style={{width:"1%"}}>
                                <button style={{height:"4vh", width:"4vh"}} onClick={()=>setShowDeets(0)}>✖️</button>
                            </div>
                        </div>: null}
                    </div>
                )) 
                :<h2>Sign Up or Sign In</h2>}
            </div>
        </div>
    )
}

export default ToDo;