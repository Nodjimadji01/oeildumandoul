import Navigation from "./Navigation";
import NotFound from "../pages/Notfound";
import Routess from "../pages/routes";
import '../pages/app.css';
const Header = () => {
    return (
        <header className="header"  >
           {/* <ul className="items">
                <li><a href="/" className="nomJournal">L'oeil<a style={ { color : 'blue'}}>du</a>Mandoul</a></li>
                <li><a href="../pages/Notfound" className="conneter">Se connecter</a></li>
                <li><a className="abonner">ABONNEZ-VOUS</a></li>
            </ul> */}
            <Navigation></Navigation>
        </header>
     );
}
export default Header;
