import Navigation from "./Navigation";
const Header = () => {
    return (
        <header className="header">
            <ul>
                <li><a className="nomJournal">L'oeil<a style={ { color : 'blue'}}>du</a>Mandoul</a></li>
                <li><a className="conneter">Se connecter</a></li>
                <li><a className="abonner">ABONNEZ-VOUS</a></li>
                <Navigation></Navigation>
            </ul>
        </header>
     );
}

export default Header;
