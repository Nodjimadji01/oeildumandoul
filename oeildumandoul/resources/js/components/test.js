import React from 'react';
import ReactDOM from 'react-dom';
//const { default: Home } = require('./components/home');
export default function HelloReact(){
    return (
        <i>hello react </i>
    );

}
if(document.getElementById('hello-react')){
    ReactDOM.render(<HelloReact/>,document.getElementById('hello-react'));
}
