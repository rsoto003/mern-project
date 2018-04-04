import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import GetStuff from './get_stuff';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
            <GetStuff/>
        </div>
    </div>
);

export default App;
