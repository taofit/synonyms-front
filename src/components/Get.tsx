import { Col, Container, Row, ListGroup, Form } from "react-bootstrap";
import SearchBar from "./Search";
import { useState } from "react";

const Get = () => {
  const [synonyms, setSynonyms] = useState<string[]>([]);

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
        Search synonyms
      </Row>
      <br />
      <SearchBar onSetSynonyms={setSynonyms} />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup as="ul">
            {synonyms.map((word, index) => (
              <ListGroup.Item
                key={index}
                as="li"
                variant="dark"
                action
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "lightsteelblue",
                }}
              >
                <Form.Text>{word}</Form.Text>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Get;
