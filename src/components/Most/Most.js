import './Most.css';

import Products from '../Products/Products';
const Most = ()=> {
    return (
        <>
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4>Products</h4>
            </div>
            <div className='many-product'>
                <Products />
                </div>
                <div className='many-product1'>
                    <Products />
                </div>
                </div>
        </>
    )
}

export default Most;