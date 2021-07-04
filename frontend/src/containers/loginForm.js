import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'

import { AUTH_USER } from '../store/actions/actionTypes';


function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({type: AUTH_USER, payload: {
      email:email,password: password
    }})

  }


  return (

    <div style={{ width: "40%", marginLeft: "Auto", marginRight: "Auto" }}>
      <h3 style={{ textAlign: "Center" }}> {t('LOGIN')} </h3>
      <Form onSubmit={submitHandler} style={{ width: "100%", marginLeft: "Auto", marginRight: "Auto", }}>
        <Form.Group controlId="email">
          <Form.Label>{t('EMAIL_ADRESS')}</Form.Label>
          <Form.Control
            type="email"
            placeholder={t('ENTER_EMAIL')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}


          />
          <Form.Text className="text-muted">
            {t('WE_WILL_NEVER_SHARE_YOUR_EMAIL')}.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('PASSWORD')}</Form.Label>
          <Form.Control type="password" placeholder={t('PASSWORD')}
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          {t('LOGIN')}
        </Button>

        <Link to={'/register'} >   <Button variant="primary" style={{ marginLeft: "15px" }}> {t('REGISTER')} </Button>  </Link>
      </Form>
    </div>

  );
}

export default LoginForm;