
import { Container, Row, Col } from 'react-bootstrap';
import Countdown from 'react-countdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>Coming Soon!</span>;
  } else {
    return (
      <span>
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
      </span>
    );
  }
};

const CounterDownPage = () => {
  const isLog = useSelector(state=>state.auth.isLogIn)
  console.log(isLog)
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Coming Soon</h1>
          <Countdown date="2023-01-01T00:00:00" renderer={renderer} />
        </Col>
      </Row>
    </Container>
  );
};

export default CounterDownPage;