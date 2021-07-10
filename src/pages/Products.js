import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Products = () => {
  return (
    <div>
      <h1>The Products Page</h1>
      <Container fluid>
        <Row>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Frobot-heggy.gif?v=1622456041228" alt="Heggy face moving"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>



          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fgrumpy.gif?v=1619841777278" alt="husky angry"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Products;