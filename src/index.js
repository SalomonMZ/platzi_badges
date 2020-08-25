// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi Badges From React!</h1>;
// const element = React.createElement(
//     'a',
//     { href: 'http://platzi.com'},
//     'Ir a Platzi'
// )

// const name = 'Luisa';
// const sum = () => 3+3;
// const element = React.createElement('h1',{}, `Hola, soy ${name}`);
// const jsx = <h1>Hola, soy {name}</h1>

const jsx = <div>
    <h1>Hola, soy Salomon</h1>
    <p>Soy ingeniero Front-End</p>
</div>

// const element = React.createElement(
//     'div', 
//     {},
//     React.createElement('h1', {}, 'Hola, soy Salomon'),
//     React.createElement('p', {}, 'Soy Ingeniero FrontEnd')
// );

const container = document.getElementById('app');
// JSX es solamente Syntaxis Sugar, ya que gracias a Babel y react-create-app se transpila a JS
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
