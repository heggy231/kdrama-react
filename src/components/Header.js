import { Link } from 'react-router-dom';

import { Alert, Button, Container, Jumbotron } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <Alert></Alert>
          <h1>Korean Dramarama</h1>
          <p>
            Today's most fun Korean Drama!
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </Jumbotron>
      <h1>My eCommerce React Router Practice</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/welcome">Welcome</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </>
  );
};

export default Header;