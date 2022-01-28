import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
function Home() {
    return (
        <div>
            <h1>Acceuille</h1>
        </div>
    );
}
export default Home;
if(document.getElementById('home')){
    ReactDOM.render(<Home/>,document.getElementById('home'));
}
