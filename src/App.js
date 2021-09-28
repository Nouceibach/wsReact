
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container, Nav, Carousel ,Form,Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ANJobsFactory</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">FOR CANDIDATES</Nav.Link>
      <Nav.Link href="#features">FOR EMPLOYERS</Nav.Link>
      <Nav.Link href="#pricing">PAGE</Nav.Link>
      <Nav.Link href="#pricing">BLOG</Nav.Link>
      <button>SIGN UP</button>
      <button>LOGIN</button>
    </Nav>
    </Container>
  </Navbar>
  <Carousel className='stylecarousel'>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/business-professionals-working-at-new-office-desk-picture-id1271153817?b=1&k=20&m=1271153817&s=170667a&w=0&h=uepHSQJa-qN5LTMyeuffMclSV2xqpt90aYzyqHYGUqg="
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/new-days-365-new-chances-letter-board-with-motivational-quote-with-picture-id1286378605?b=1&k=20&m=1286378605&s=170667a&w=0&h=-qR7i081RIrB3VfZ-Q2FXYIPdBfWcv-JIiME4pvf7Y8="
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/top-view-of-a-white-desktop-concept-job-search-picture-id1279104620?b=1&k=20&m=1279104620&s=170667a&w=0&h=jcW2DC3tLKnfcU2f9fVRScTckqemE1vEhvOZ7uELg0M="
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Form className="styleForm">
<Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>SIGN UP</Form.Label>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Control type="username" placeholder="Username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Control type="email" placeholder="email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Control type="confirmpassword" placeholder="confirmPassword" />
  </Form.Group>
  <Button  type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
