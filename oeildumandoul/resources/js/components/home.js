import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
import Header from './Header';
function Home() {
    return (
        <div className='home' >
            <Header></Header>
        </div>
    );
}
if(document.getElementById('home')){
    ReactDOM.render(<Home/>,document.getElementById('home'));
}
