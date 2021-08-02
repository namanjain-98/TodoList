import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export const TodoItem = ({todo, onDelete}) => {
    return (
     
      
       

<ListGroup>
    <ListGroupItem>
        <ListGroupItemHeading>{todo.title}</ListGroupItemHeading>
        <ListGroupItemText> {todo.desc} </ListGroupItemText>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
    </ListGroupItem>
</ListGroup>


    )
}
