import React from "react";

function ListItem(props){
    return(<li onClick={()=>{
        props.del(props.id)
    }}>{props.text}</li>)
}

export default ListItem;