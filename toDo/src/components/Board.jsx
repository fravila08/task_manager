import axios from "axios";
import React from "react";

function Board(props){
    const drop = e =>{
        e.preventDefault();
        const boardDrop =String(e.target.id)
        const card_id=e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        const idToPass = Number(String(card_id).slice(5))
        card.style.display='block';
        e.target.appendChild(card);

        axios.post("getComplete",{
            "taskId":idToPass,
            "boardDrop":boardDrop
        })
    }
    const dragOver= e=>{
        e.preventDefault();
    }

    return(
        <div 
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
        className={props.className}
        >
            {props.children}
        </div>
    )
}

export default Board