import axios from "axios";
import { useState, useEffect } from "react";
import Board from "../components/Board";
import Card from "../components/Cards";
import {ShakeLittle} from "reshake"
import EraseDetails from "../components/EraseLabel";
import SeeDetails from "../components/Label";


function DashBoard({deleteTask}){
    const [items, setItems]=useState([])
    const [completed, setCompleted]=useState([])
    const [foundData, setFoundData]=useState(false)
    const [show, setShow]=useState(false)
    const [showDeets, setShowDeets]=useState()
    const [foundDummy, setFoundDummy]= useState(false)
    const [idummy, setIdummy]=useState([])
    const [cdummy, setCdummy]=useState([])

    const getMyTask=async()=>{
         const response = await axios.get("getTask")
         if (response.data !== false){
            setItems(response.data)
            setFoundData(!foundData)
         }
         else {
            console.log("no user task")
        }
        }
    
    const getCompleteTask=async()=>{
        const response = await axios.get("getComplete")
        if (response.data !== false){
            setCompleted(response.data)
            setShow(!show)
        }
        else{
            console.log("no user completed task")
        }
    }

    const getDummy= async()=>{
        const response= await axios.get("dummydata")
        if(response.data !== false){
            console.log(response.data)
            setIdummy(response.data)
            setFoundDummy(!foundDummy)
        }
        else{
            console.log("no dummy data")
        }
    }

    useEffect(()=>{
        getMyTask()
        getCompleteTask()
        getDummy()
    },[])

    
    return (
        <div className="flexbox" style={{flexDirection:"column", alignItems:"center"}}>
            <h2 style={{marginBottom:"3vh", backgroundColor:"white", borderRadius:"2vw",padding:"2vh 10vw"}}>Todays Tasks</h2>
        <div className="flexbox">
            <Board id="board_1" className="board">
                <div className="columnTitle">
                    <h3>INCOMPLETE</h3>
                </div>
                
                {foundData ? items.map((item)=>(
                    <div className="holder">
                    <ShakeLittle className="holder" dur={1500} >
                        <Card id={`card_${item.id}`} className="card" draggable="true">
                            <div className="insideCard">
                                <h5>{item.title} @ {item.time_for_event}</h5>
                                <div>
                                    <EraseDetails deleteTask={deleteTask} myItemId={item.id}/>
                                    <SeeDetails  setShowDeets={setShowDeets} myItemId={item.id} showDeets={showDeets}/>
                                </div>
                            </div>
                        </Card>
                    </ShakeLittle>
                    {showDeets == item.id ? 
                        <div className="detailsContainerDashboard">
                            <ul style={{width:"47%", paddingLeft:"5vw"}}>
                                <li>Phone Number: {item.phone}</li>
                                <li>Address: {item.address}</li>
                                <li>Email: {item.email}</li>
                                <li>Event Url: {item.url}</li>
                            </ul>
                            <p style={{width:"48%"}}><strong>Notes</strong>
                            <br/>{item.details}</p>
                            <div style={{width:"5%"}}>
                                <button style={{height:"4vh", width:"4vh"}} onClick={()=>setShowDeets(0)}>✖️</button>
                            </div>
                        </div>: null}
                    </div>
                )):
                <div>
                    {foundDummy ? idummy.map((item)=>(
                    <div className="holder">
                    <ShakeLittle className="holder" dur={1500} >
                        <Card id={`card_${item.id }`} className="card" draggable="true">
                            <div className="insideCard">
                                <h5>{item.title}</h5>
                                <div>
                                    <EraseDetails deleteTask={deleteTask} myItemId={item.id}/>
                                </div>
                            </div>
                        </Card>
                    </ShakeLittle></div>)) : null}
                </div>}
            </Board>
            <Board id="board_2" className="board">
                <div className="columnTitle">
                    <h3>COMPLETED</h3>
                </div>
                {show ? completed.map((item)=>(
                    <ShakeLittle className="holder" >
                        <Card id={`card_${item.id}`} className="card" draggable="true">
                            <p>{item.title}</p>
                            <p>{item.time_for_event}</p>
                        </Card>
                    </ShakeLittle>
                )):<p></p>}
            </Board>
        </div>
        </div>
    )
}

export default DashBoard;