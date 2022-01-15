import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Hats from "./Pages/Hats/Hats";
import Boxes from "./Pages/Boxes/Boxes";


ReactDOM.render((
    <BrowserRouter>
        <Routes>
            <Route path="/hats" element={<Hats/>}/>
            <Route path="/boxes" element={<Boxes/>}/>
            <Route path = "/" element={<App/>}/>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

