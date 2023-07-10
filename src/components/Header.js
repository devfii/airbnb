import AirbnbLogo from '../images/logo.svg';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={AirbnbLogo} alt="Airbnb logo" className="nav--logo"></img>
            </nav>
        </header>
    )
}