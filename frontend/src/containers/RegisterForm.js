import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React,{ useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';

 function RegisterForm() {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [name,setName] = useState('')
   const [phone,setPhone] = useState('')
   const { t } = useTranslation();
 
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
        <h3 style={{textAlign:"Center"}}> {t('REGISTER')}</h3>  
                <Form onSubmit={RegisterHandler} style={{width:"100%", marginLeft:"Auto",marginRight:"Auto",}}> 

                <Form.Group controlId="name">
                <Form.Label>{t('NAME')}</Form.Label>
                <Form.Control 
                type="name" 
                placeholder={t('NAME')}
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />  </Form.Group>
                <Form.Group controlId="phone">
                <Form.Label>{t('PHONE')}</Form.Label>
                <Form.Control 
                type="phone" 
                placeholder={t('PHONE_NUMBER')} 
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                />
                </Form.Group>
                
                <Form.Group controlId="email">
                <Form.Label>{t('EMAIL_ADRESS')}</Form.Label>
                <Form.Control 
                type="email" 
                placeholder={t('ENTER_EMAIL')} 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                <Form.Text className="text-muted">
                {t('WE_WILL_NEVER_SHARE_YOUR_EMAIL')}
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                <Form.Label>{t('PASSWORD')}</Form.Label>
                <Form.Control type="password" placeholder={t('PASSWORD')}
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                {t('REGISTER')}
                </Button>
                </Form> 
         
       </div>
       
    );
  }

export default RegisterForm;