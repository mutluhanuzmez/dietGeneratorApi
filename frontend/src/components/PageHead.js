import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
 function PageHead() {
  
  
    return(
  
       <div>  
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="/">Yemek</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
     
      <Nav.Link eventKey={2} href="/login">
        Login
      </Nav.Link>
      <Nav.Link eventKey={2} href="/Register">
        Register
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
         
       </div>
       
    );
  }

export default PageHead;