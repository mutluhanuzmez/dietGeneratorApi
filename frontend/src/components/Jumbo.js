import { useTranslation } from 'react-i18next';
 
 function Jumbo() {
   const { t } = useTranslation();
    return(
       <div>  
         <h1 style={{textAlign:"Center"}}> {t('SLOGAN_1')}</h1>   
       </div>
       
    );
  }

export default Jumbo;