
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import React,{ useState , useEffect} from 'react'
import axios from 'axios'

 function RegisterForm() {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [name,setName] = useState('')
   const [phone,setPhone] = useState('')
 
   const RegisterHandler = (e) => {   

      e.preventDefault();
      console.log("calisiyorum");
      axios.post(`http://localhost:8000/auth/register`, 
      {'email':email,'password': password,'name': name, 'phone':phone},)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      console.log(email,password);
       
      
     
      

     
    }


    return(

       <div style={{width:"30%", marginLeft:"Auto",marginRight:"Auto",backgroundColor:""}}>  
        <h3 style={{textAlign:"Center"}}> Register</h3>  
                <Form onSubmit={RegisterHandler} style={{width:"100%", marginLeft:"Auto",marginRight:"Auto",}}> 

                <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="name" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />  </Form.Group>
                <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                type="phone" 
                placeholder="Phone Number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                />
                </Form.Group>
                
                <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                 Register
                </Button>
                </Form> 

                <p> send post request , 
                    if it is succesfull , redirect to  home page , save access token
                </p>
         
       </div>
       
    );
  }

export default RegisterForm;