import { useState } from "react";
import { Button, ButtonGroup, Form, ListGroup } from "react-bootstrap";

interface ItemProps {
  index: number;
  word: string;
  onDeleteItem: (index: number) => void;
  onEditItem: (index: number, word: string) => void;
}

const Item: React.FC<ItemProps> = ({
  index,
  word,
  onDeleteItem,
  onEditItem,
}) => {
  const [viewing, setViewing] = useState<boolean>(true);
  const viewMode = { display: "" };
  const editMode = { display: "none" };

  if (viewing) {
    viewMode.display = "";
    editMode.display = "none";
  } else {
    editMode.display = "";
    viewMode.display = "none";
  }

  return (
    <div key={index}>
      <ListGroup.Item
        as="li"
        variant="dark"
        action
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "lightsteelblue",
        }}
      >
        <Form.Text style={viewMode}>{word}</Form.Text>
        <Form.Control
          style={editMode}
          type="text"
          value={word}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setViewing(true);
            }
          }}
          onChange={(e) => onEditItem(index, e.target.value)}
        />
        <ButtonGroup>
          <Button
            style={{ borderRadius: "8px" }}
            className="me-2 ms-2"
            variant="light"
            onClick={() => {
              setViewing(true);
              onDeleteItem(index);
            }}
          >
            Delete
          </Button>
          <Button
            variant="light"
            style={{ borderRadius: "8px" }}
            onClick={() => {
              if (viewMode.display === "") {
                setViewing(false);
              } else {
                if (word.trim() === "") {
                  return;
                }
                setViewing(true);
              }
            }}
          >
            {viewMode.display === "" ? "Edit" : "View"}
          </Button>
        </ButtonGroup>
      </ListGroup.Item>
    </div>
  );
};

export default Item;
