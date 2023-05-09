import './seeMore.css';

import { Link } from 'react-router-dom';
const seeMore = () => {
    return(
        <>
        <div className='More'>
            <Link to="/allProducts" className='link'>See More</Link>
        </div>
        </>
    )
}

export default seeMore;