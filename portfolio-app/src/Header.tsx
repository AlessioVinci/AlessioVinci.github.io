import logo from './assets/logo.svg';

function Header() {

    return (
        <header className='nav nav-scroll'>
                <img className='nav-logo' src={logo} />
                <span className='nav-menu'> Menu </span>
        </header>
    );
}

export default Header