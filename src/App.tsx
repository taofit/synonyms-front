import { Form, Container, Row, ListGroup } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Search synonyms tool
      </Row>
      <br />
      <Row>
        <Form.Text>
          A search synonyms tool is a digital resource designed to help users
          find alternative words or phrases with similar meanings to a given
          term. These tools are particularly useful for enhancing vocabulary,
          improving writing, and avoiding repetition. Here are a few examples of
          such tools:
        </Form.Text>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li">
            user can search for synonyms of a word
          </ListGroup.Item>
          <ListGroup.Item as="li">
            user can add synonyms of a word
          </ListGroup.Item>
          <ListGroup.Item as="li">
            user can edit synonyms of a word
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
}

export default App;
