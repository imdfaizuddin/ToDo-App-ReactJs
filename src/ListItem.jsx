import React from "react";

function ListItem(props) {
    return (<li>
                <span>{props.text}</span>
                {props.del != null && 
                <img onClick={() => props.del(props.id)} src="/delete.png" alt="delete btn" />}
            </li>)
}

export default ListItem;