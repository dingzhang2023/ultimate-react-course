import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Seed data
const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

const App = () => {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
};

const Header = () => {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
};

const Footer = () => {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	return (
		<footer className="footer">
			{isOpen ? (
				<Order closeHour={closeHour} openHour={openHour} />
			) : (
				<p>
					Sorry, we are closed now! We're happy to welcome you between{' '}
					{openHour}:00 and {closeHour}:00.
				</p>
			)}
		</footer>
	);
};

const Order = ({ closeHour, openHour }) => {
	return (
		<div className="order">
			<p>
				We're open from {openHour}:00 to {closeHour}:00. Come visit us
				or order online.
			</p>
			<button className="btn">Order</button>
		</div>
	);
};

const Menu = () => {
	// const pizzas = [];
	const pizzas = pizzaData;

	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{pizzas.length > 0 && (
				<ul className="pizzas">
					{pizzas.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			)}
		</main>
	);
};

// Pizza component
const Pizza = ({ pizzaObj }) => {
	return (
		<li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
			</div>
		</li>
	);
};

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
