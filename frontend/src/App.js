import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHead from './components/PageHead'
import Entrance from './containers/Entrance'
import LoginForm from './containers/loginForm'
import RegisterForm from './containers/RegisterForm'
import Jumbo from './components/Jumbo'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <PageHead />
      <Jumbo />
      <Container>
        <Route path='/' component={Entrance} exact />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </Container>
    </Router>
  );
}

export default App;
