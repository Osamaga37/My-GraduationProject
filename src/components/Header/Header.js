import './Header.css';

import logo from '../assets/images/logo.jpg';
import { RiUserFill } from 'react-icons/ri';

const Header =() => {
    return(
        <nav>
            <div className="navBar">
                <img className='logo' src={logo} alt='logo' />
                <h1 className='webName'>Minimal <span>Shop</span>ping</h1>
            </div>
            <button className='HiUser'><RiUserFill size={30} /></button>
        </nav>
    )
}

export default Header;