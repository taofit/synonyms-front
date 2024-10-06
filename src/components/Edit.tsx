import {
  Button,
  Col,
  Container,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import SearchBar from "./Search";
import { useState } from "react";
import Item from "./Item";
import { ToastProps, ToastType } from "../types/ToastTypes";
import Notification from "./Notification";
import { PutRequest } from "../services/API";

const Edit = () => {
  const [synonyms, setSynonyms] = useState<string[]>([]);
  const [term, setTerm] = useState<string>("");
  const [toast, setToast] = useState<ToastProps>({
    show: false,
    message: "",
    type: ToastType.INFO,
  });

  const SubmitSynonyms = async () => {
    if (synonyms.some((word) => word.trim() === "") || synonyms.length < 1) {
      setToast({
        show: true,
        message: "synonym contains invalid input",
        type: ToastType.WARNING,
      });
      return;
    }
    const response = await PutRequest("synonym", {
      word: term,
      newSynonyms: synonyms,
    });

    if (response.status === 200) {
      const message = await response.json();
      setToast({
        show: true,
        message,
        type: ToastType.SUCCESS,
      });
    } else if (response.status === 404) {
      const message = await response.json();
      setToast({
        show: true,
        message,
        type: ToastType.WARNING,
      });
    } else {
      setToast({
        show: true,
        message: "Error updating synonyms",
        type: ToastType.ERROR,
      });
    }
  };

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
        Edit synonyms
      </Row>
      <br />
      <Row>
        <Col md={{ span: 7 }}>
          <SearchBar onSetSynonyms={setSynonyms} onSetTerm={setTerm} />
        </Col>
        <Col md={{ span: 3 }}>
          <InputGroup id="basic-addon1">
            <Button
              style={{ borderRadius: "8px" }}
              variant="dark"
              className="mt-1 me-2"
              onClick={() => setSynonyms([...synonyms, ""])}
            >
              Add
            </Button>
            <Button
              style={{ borderRadius: "8px" }}
              variant="dark"
              className="mt-1"
              onClick={SubmitSynonyms}
            >
              Submit
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6 }} style={{ marginLeft: "23%", marginTop: "1%" }}>
          <ListGroup as="ul">
            {synonyms.map((word, index) => (
              <Item
                key={index}
                index={index}
                word={word}
                onDeleteItem={(index) => {
                  setSynonyms(synonyms.filter((_, i) => i !== index));
                }}
                onEditItem={(index, word) => {
                  setSynonyms(
                    synonyms.map((item, i) => (i === index ? word : item))
                  );
                }}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Notification toast={toast} onSetToast={setToast} />
    </Container>
  );
};

export default Edit;
