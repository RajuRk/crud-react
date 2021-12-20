import React from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function Edituser() {
    return (
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="Enter Name"></Input>
          </FormGroup>
          <Button type="submit">Edit</Button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </Form>
    )
}

export default Edituser
