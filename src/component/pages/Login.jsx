import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actionAuth } from '../../store/Auth';

const LoginPage = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
const dispatch = useDispatch()
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
    dispatch(actionAuth.logIn())
 };

 return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
 );
};

export default LoginPage;