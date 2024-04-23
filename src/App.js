import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/common/Navbar';
import RouteList from './routes/RouteList';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <RouteList />
            </BrowserRouter>
        </div>
    );
};
export default App;
