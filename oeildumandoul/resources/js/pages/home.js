import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
import Header from '../components/Header';
import NotFound from './Notfound';
import Footer from '../components/footer';
function Home() {

    return (
        <div className='home' >
            <Header></Header>
        
        <div className='carroussel'>
            <form>
            <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
            <input type="radio" name="fancy" value="hearts" id="hearts" />
            <input type="radio" name="fancy" value="spades" id="spades" />
            <input type="radio" name="fancy" value="diamonds" id="diamonds" />			
            <label for="clubs">&#9827; Clubs</label><label for="hearts">&#9829; Hearts</label><label for="spades">&#9824; Spades</label><label for="diamonds">&#9830; Diamonds</label>

            <div class="keys">Use left and right keys to navigate</div>
            </form>
        </div>

            <div className="body">
                    <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
                <p className="p">
                L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions.
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
}
if(document.getElementById('home')){
    ReactDOM.render(<Home/>,document.getElementById('home'));
}
