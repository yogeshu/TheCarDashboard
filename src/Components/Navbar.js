import { Link } from 'react-router-dom'
import { Navbar , Nav , NavDropdown } from 'react-bootstrap'
const NavbarHeader = () =>{
    return(
        <div> 


<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home"> Card Dashboard </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">

          
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link to>Dashboard            <Link to="/Dashboard">Dashboard</Link>
 <i className="fa fa-user-circle" aria-hidden="true"></i></Nav.Link>
    
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
         
        </div>
    )
}
export default NavbarHeader;