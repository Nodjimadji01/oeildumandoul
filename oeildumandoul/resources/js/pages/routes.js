import React from "react";
import { Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Routes } from 'react-router-dom'
import Finance from "./finance";
import Politique from "./politique";

const Routess = () => {
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route exact path="/oeildumandoul/oeildumandoul/oeildumandoul/resources/js/pages" component= { Politique } />
                <Route exact path="/oeildumandoul/oeildumandoul/oeildumandoul/resources/js/pages" component= { Finance } />
            </Switch>
        </div>
     );
}

export default Routess;
