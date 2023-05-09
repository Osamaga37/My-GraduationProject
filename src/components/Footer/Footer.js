import './Footer.css';

import { Link } from 'react-router-dom';
const Footer =() => {
    return(
        <>
        <div className='More'>
            <Link to="/More" className='link'>See More</Link>
        </div>
        </>
    )
}

export default Footer;