
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
 function Entrance() {
  
  
    return(
  
       <div>  
      
       
       <Row> 
           <Col> <Card style={{ width: '18rem' }}>
  
       <Card.Body>
       <Card.Title>Yemek 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>   </Col>
           <Col> <Card style={{ width: '18rem' }}>
 
  <Card.Body>
    <Card.Title>Yemek 2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> </Col>
           <Col> <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Yemek 3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> </Col>
       </Row>
         
       </div>
       
    );
  }

export default Entrance;