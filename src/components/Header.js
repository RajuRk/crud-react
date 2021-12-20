import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavbarBrand, Container} from 'reactstrap';

function Header() {
    return (
        <Navbar color="dark" dark>
            <Container className="d-flex">
               <NavbarBrand href='/'>My Team</NavbarBrand>
               <Nav>
                   <NavItem>
                       <Link to="/adduser" className="btn btn-primary">Add User</Link>
                   </NavItem>
               </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
