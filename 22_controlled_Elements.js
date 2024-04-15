import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1> Far away</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    //checking whether the description is null or not .
    //if description is null then nothing will happen
    if (!description) return;
    //storing new item into newItem var 
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // setting to default values after submission of form 
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> ADD </button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item items={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list and you alredy packed X(X%)</em>
    </footer>
  );
}
function Item({ items }) {
  return (
    <li>
      {" "}
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} &nbsp;&nbsp;
        {items.description}
      </span>
      <button style={{ color: "white" }}>X</button>
    </li>
  );
}
