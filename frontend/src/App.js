import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthRoute from "./components/AuthRoute";

import PageHead from './components/PageHead/index'
import Entrance from './containers/Entrance'
import LoginForm from './containers/LoginForm'
import RegisterForm from './containers/RegisterForm'
import UserHome from './containers/UserHome'
import Jumbo from './components/Jumbo'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <PageHead />
      <Jumbo />
      <Container>
        <Switch>
          <Route path='/' component={Entrance} exact />
          <AuthRoute path='/login' type='guest'>
            <LoginForm/>
          </AuthRoute>
          <AuthRoute path='/register' type='guest'>
            <RegisterForm/>
          </AuthRoute>
          <AuthRoute path='/userhome' type='private'>
            <UserHome/>
          </AuthRoute>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
