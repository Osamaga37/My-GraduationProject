import './More.css';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import { Products } from '../../components';


const More =() => {
    return(
        <>
        <div className='section-all'>
            <div className='section-header-all'>
                <h4>All Products</h4>
            </div>
            <div className='many-products'>
                <Products />
                </div>
                <div className='many-products1'>
                    <Products />
                </div>
                <div className='many-products2'>
                    <Products />
                </div>
                
            </div>
        </>
    )
}

export default More;