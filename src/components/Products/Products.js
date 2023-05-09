import './Products.css';

import rect4 from '../assets/images/Rectangle 4.svg';
import rect5 from '../assets/images/Rectangle 5.svg';
import rect6 from '../assets/images/Rectangle 6.svg';
import rect7 from '../assets/images/Rectangle 7.svg';


import {Product} from '../index'
import { FaRegHeart } from 'react-icons/fa';

// var loveIcon = document.getElementsByClassName('love-icon');
// loveIcon.forEach(icon => {
//     icon.onclick = () =>{
//     }
// });
const Products =() => {
    
    return(
        <>
        <div className='section-wrapper'>
            <div className='most-popular-products'>
                <Product id="1" image={rect4} icon={FaRegHeart} title="iPhone 9" description="An apple mobile which is nothing like apple, An apple mobile which is nothing like apple" price="85$" />
                <Product id="2" image={rect5} icon={FaRegHeart} title="iPhone 9" description="Organic Cotton, Fair Trade quality" price="85$" />
                <Product id="3" image={rect6} icon={FaRegHeart} title="iPhone 9" description="Organic Cotton, Fair Trade quality" price="85$" />
                <Product id="4" image={rect7} icon={FaRegHeart} title="Rounded neck - T shirt 100% Cotton" description="Organic Cotton, Fair Trade quality" price="85$" />
                    </div> 
                    </div>
        </>    
    )

}

export default Products;