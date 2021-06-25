import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React,{ useState , useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

 function LoginForm() {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
 
   const submitHandler = (e) => {   

      e.preventDefault();
      console.log("calisiyorum");
      axios.post(`http://localhost:8000/auth/login`, 
      {'username':email,'password': password,},)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      console.log(email,password);
       
    }


    return(

       <div style={{width:"40%", marginLeft:"Auto",marginRight:"Auto"}}>  
        <h3 style={{textAlign:"Center"}}> Login </h3>  
                <Form onSubmit={submitHandler} style={{width:"100%", marginLeft:"Auto",marginRight:"Auto",}}>
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
                Login
                </Button>
              
                <Link to={'/register'} >   <Button variant="primary" style={{marginLeft:"15px"}}> Register  </Button>  </Link>
               
                
                </Form> 

                <p> send post request , 
                    if it is succesfull , redirect to  home page , save access token
                </p>
         
       </div>
       
    );
  }

export default LoginForm;