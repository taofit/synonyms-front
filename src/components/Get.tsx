import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./Search";
import { useState } from "react";

const Get = () => {
  const [synonyms, setSynonyms] = useState<string[]>([]);

  return (
    <Container>
      <Row
        style={{
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
      {synonyms.map((word, index) => (
        <Row>
          <Col
            className="col-md-7 offset-md-5 border pt-1 pb-1"
            key={index}
            variant="dark"
            style={{
              justifyContent: "space-between",
              backgroundColor: "lightsteelblue",
            }}
          >
            {word}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Get;
