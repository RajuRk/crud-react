import React from 'react'
import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem, Button} from 'reactstrap';

function Userlist() {
    return (
       <ListGroup className='mt-4'>
           <ListGroupItem className="d-flex">
               <strong>User One</strong>
               <div className="ml-auto">
               <Link to="/edituser/1" className="btn btn-warning">Edit</Link>
               <Button color="danger">Delete</Button>
               </div>
           </ListGroupItem>
       </ListGroup> 
    )
}

export default Userlist
