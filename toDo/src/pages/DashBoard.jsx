import axios from "axios";
import { useState, useEffect } from "react";
import Board from "../components/Board";
import Card from "../components/Cards";
import {ShakeLittle} from "reshake"


function DashBoard(){
    const [items, setItems]=useState([])
    const [completed, setCompleted]=useState([])
    const [foundData, setFoundData]=useState(false)
    const [show, setShow]=useState(false)

    const getMyTask=async()=>{
         const response = await axios.get("getTask")
         setItems(response.data)
         setFoundData(!foundData)
         console.log(response.data)
        }
    
    const getCompleteTask=async()=>{
        const response = await axios.get("getComplete")
        setCompleted(response.data)
        setShow(!show)
        console.log(response.data)
    }

    useEffect(()=>{
        getMyTask()
        getCompleteTask()
    },[])


    return (
        <div className="flexbox" style={{flexDirection:"column", alignItems:"center"}}>
            <h3 style={{color:"white", marginBottom:"3vh"}}>Task of the Day</h3>
        <div className="flexbox">
            <Board id="board_1" className="board">
                <div className="columnTitle">
                    <h3>INCOMPLETE</h3>
                </div>
                {foundData ? items.map((item)=>(
                    <ShakeLittle className="holder" >
                        <Card id={`card_${item.id}`} className="card" draggable="true">
                            <p>{item.title}</p>
                            <p>{item.time_for_event}</p>
                        </Card>
                    </ShakeLittle>
                )):<p></p>}
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