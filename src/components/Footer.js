import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCopyright } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className='footer mt-auto py-3 bg-dark text-white'>
      <div className='container'>
        <Row>
          <Col>
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faCopyright} />
            2021 Pavilion in <address>Seattle, WA</address> - All rights Reserved -
          </Col>

          <Col>
            <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacy</a>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;