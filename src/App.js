import Item from "./components/Item";
import "./App.css";

function App() {
  const name1 = "Ankita Tiwari"
  const name2 = "Shivam Tiwari"
  const name3 = "Preeti Tiwari"
  return (
    <div>
      <Item name={name1}></Item>
      <Item name={name2}></Item>
      <Item name={name3}></Item>
      <div className="App">hello ji</div>
    </div>
  );
}

export default App;
