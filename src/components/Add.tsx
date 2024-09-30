import { useState } from "react";
import Notification from "./Notification";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import Item from "./Item";
import { PostRequest } from "../services/API";
import { ToastProps, ToastType } from "../types/ToastTypes";

const Add = () => {
  const [word, setWord] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [toast, setToast] = useState<ToastProps>({
    show: false,
    message: "",
    type: ToastType.INFO,
  });

  const addItem = (word: string) => {
    if (word.trim() === "") {
      return;
    }
    setList([...list, word]);
  };

  const handleDeleteItem = (index: number): void => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleEditItem = (index: number, word: string): void => {
    list[index] = word;
    setList([...list]);
  };

  const SubmitSynonyms = async (synonyms: string[]) => {
    if (synonyms.some((word) => word.trim() === "") || synonyms.length < 2) {
      setToast({
        show: true,
        message: "synonym contains invalid input",
        type: ToastType.WARNING,
      });
      return;
    }

    const response = await PostRequest(
      "synonym",
      synonyms
    );

    if (response.status === 201) {
      setToast({
        show: true,
        message: await response.json(),
        type: ToastType.SUCCESS,
      });
    } else if (response.status === 500) {
      setToast({
        show: true,
        message: await response.json(),
        type: ToastType.WARNING,
      });
    }
  };

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
        Add synonyms
      </Row>
      <br />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter word"
              size="lg"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              aria-label="add word"
              aria-describedby="basic-addon2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addItem(word);
                }
              }}
            />
            <InputGroup id="basic-addon1">
              <Button
                style={{ borderRadius: "8px" }}
                variant="dark"
                className="mt-2 me-2"
                onClick={() => addItem(word)}
              >
                Add
              </Button>
              <Button
                style={{ borderRadius: "8px" }}
                variant="dark"
                className="mt-2"
                onClick={() => SubmitSynonyms(list)}
              >
                Submit
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup as="ul">
            {list.map((item, index) => (
              <Item
                key={index}
                index={index}
                word={item}
                onDeleteItem={handleDeleteItem}
                onEditItem={handleEditItem}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Notification toast={toast} onSetToast={setToast} />
    </Container>
  );
};

export default Add;
