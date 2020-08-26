import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
    <Badge
        firstName='Salomon'
        secondName='Moreno'
        jobTitle='Fron-End Engineer'
        socialMedia='smorenoz'
    />, container);
