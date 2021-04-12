import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PageHead from './LayoutCo/PageHead'
import Entrance from './LayoutCo/Entrance'
import LoginForm from './LoginCo/loginForm'
import RegisterForm from './LoginCo/RegisterForm'
import Jumbo from './LayoutCo/Jumbo'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router ,Route } from "react-router-dom";
function App() { 
  return (
 
    <Router> 
      <PageHead/>
      <Jumbo/>
       <Container> 
       
       <Route path='/' component = { Entrance} exact  />
       <Route path='/login' component = { LoginForm }  />
       <Route path='/register' component = { RegisterForm }  />



</Container>  
      
</Router>
    
          
      

   
          
    
  );
}

export default App;
