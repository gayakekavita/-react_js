import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1>Fast react pizza</h1>
    </header>
  );
}

function Menu() {
  //conditional rendering
  const pizzas = pizzaData;
  return (
    <main className="menu">
      {pizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaobj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/focaccia.jpg"
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
  />*/}
    </main>
  );
}

//Recieving propertirs using props
function Pizza(props) {
  return (
    <li className="pizza">
      <h2>{props.pizzaobj.name}</h2>
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />
      <p>{props.pizzaobj.ingredients}</p>
      <h3>{props.pizzaobj.price}</h3>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 8;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  /* if (hour >= openhour && hour <= closehour) {
    alert(" We are currently open ");
  } else {
    alert("sorry we are closed");
  }*/
  return (
    <footer className="footer">
      {isopen && (
        <div className="order">
          <p> We are open until {closehour}</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
