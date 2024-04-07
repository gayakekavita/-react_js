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
  //const pizzas = [];
  const n = pizzas.length;
  return (
    <main className="menu">
      <h1> Our Menu</h1>
      {n > 0 ? (
        //fragament
        <React.Fragment>
          <p>
            "Indulge in the irresistible delight of freshly baked pizza at our
            restaurant. Our pizzas are crafted with passion and precision, using
            the finest ingredients and authentic recipes. From classic
            Margherita to gourmet specialties, each slice is a symphony of
            flavors that will tantalize your taste buds. Whether you crave the
            simplicity of a traditional pie or the adventurous spirit of
            innovative toppings, our menu offers a wide array of choices to
            satisfy every palate. Join us for a slice of happiness and
            experience the true essence of Italian culinary excellence."
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        "We are  working on our menu visit us later"
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
function Pizza({ pizzaobj }) {
  //using pizzaobj we are destruring the pizza object
  //returning multiple returns based on conditions
  if (pizzaobj.soldOut) return null;
  return (
    <li className="pizza">
      <h2>{pizzaobj.name}</h2>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <p>{pizzaobj.ingredients}</p>
      <h3>{pizzaobj.price}</h3>
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
      {/*  Using ternary operator here */}
      {isopen ? (
        <Order openhour={openhour} closehour={closehour} />
      ) : (
        `We are open from ${openhour} until ${closehour}, Visit our restaurant between this time `
      )}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p> We are open until {props.closehour}</p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
