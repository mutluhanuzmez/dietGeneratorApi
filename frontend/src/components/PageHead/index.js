import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import enFlag from '../../assets/languageFlags/EN.png'
import trFlag from '../../assets/languageFlags/TR.png'
import { useTranslation } from 'react-i18next';
import './style.css';

import { connect } from "react-redux";

//import * as actions from "../../store/actions";

const PageHead = props => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const { isAuthUser, actions } = props;

    console.log('actions', isAuthUser, actions);

    function changeLanguage(lan) {
        i18n.changeLanguage(lan);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand href="/">yemekplancısı</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/login">
                            {t('LOGIN')}
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/Register">
                            {t('REGISTER')}
                        </Nav.Link>


                    </Nav>
                    <Nav>
                        <Image onClick={() => changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
                            value={i18n.language === 'en' ? 'tr' : 'en'}
                            src={i18n.language === 'en' ? trFlag : enFlag}
                            width='30px'
                            height='30px' rounded />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

const mapStateToProps = (state) => ({
    isAuthUser: state.auth.isAuthUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () =>
});

export default connect(mapStateToProps, mapDispatchToProps)(
    PageHead
);