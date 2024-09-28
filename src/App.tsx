import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = [
    "new york",
    "london",
    "stockholm",
    "copenhagen",
    "belin",
    "paris",
  ];
  const handleSelectItem = (item: string) => {
    console.log(`Selected item is ${item}`);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="list of synonyms"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
