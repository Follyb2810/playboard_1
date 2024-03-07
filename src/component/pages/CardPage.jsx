import { Container, Row, Col, Card } from 'react-bootstrap';

const CardsPage = () => {
 return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is a card with some static content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is a card with some static content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is a card with some static content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>This is a card with some static content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>This is a card with some static content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 6</Card.Title>
              <Card.Text>This is a card with some static content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
 );
};

export default CardsPage;