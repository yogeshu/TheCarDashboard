import { Link } from 'react-router-dom'
import { Navbar , Nav , NavDropdown } from 'react-bootstrap'
const NavbarHeader = () =>{
    return(
        <div> 


<Navbar bg="dark" expand="lg">
  <Navbar.Brand >  Card Dashboard </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">

      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link >
              <Link to="/Dashboard">Dashboard 
 <i className="fa fa-user-circle" aria-hidden="true"></i> </Link></Nav.Link>
    
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
         
        </div>
    )
}
export default NavbarHeader;