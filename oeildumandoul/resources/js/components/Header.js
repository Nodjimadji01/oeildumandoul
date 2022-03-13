import Navigation from "./Navigation";
import NotFound from "../pages/Notfound";
import Routess from "../pages/routes";
const Header = () => {
    return (
        <header className="header">
            <ul>
                <li><a href="" className="nomJournal">L'oeil<a style={ { color : 'blue'}}>du</a>Mandoul</a></li>
                <li><a href="../pages/Notfound" className="conneter">Se connecter</a></li>
                <li><a className="abonner">ABONNEZ-VOUS</a></li>
            </ul>
        </header>
     );
}
export default Header;