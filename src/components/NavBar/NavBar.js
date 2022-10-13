import moto from './assets/Apple_Logocolor.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/'>
                <img src={moto} alt='Home' />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/category/MAC'>
                        <button className="margin nav-item nav-link">MAC</button>
                    </Link>
                    <Link to='/category/IPAD'>
                    <button className="margin nav-item nav-link">IPAD</button>
                    </Link>
                    <Link to='/category/IPHONE'>
                    <button className="margin nav-item nav-link">IPHONE</button>
                    </Link>
                    <Link to='/category/AIRPODS'>
                    <button className="margin nav-item nav-link">AIRPODS</button>
                    </Link>
                </div>
            </div>
            <CartWidget />
        </nav >
    )
}

export default NavBar 