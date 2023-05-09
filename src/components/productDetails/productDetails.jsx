import './productDetails.css';
import { useState, useEffect, Fragment } from "react"; 

const productDetails =() => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);
        const getPosts = async () => {
                setLoading(true);
                const response = await fetch("../../../public/products.json");
                const json = await response.json();
                setData(json?.Filter((post) => post.id <= 10));
                setLoading(false);
};
useEffect(()=>{
    getPosts();
}, []);
    return(
        <>
        <div className='all-details'>
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    <div className='product-details'>
                        <div className='product-details-header'>
                    <h2>{item.name}</h2>
                    </div>
                    <div className='product-details-des'>
                    <p>{item.description}</p>
                    </div>
                    <div className='product-details-price'>
                    <p>{item.price}</p>
                    </div>
                    <div className='product-details-image'>
                    <p>{item.image}</p>
                    </div>
                    </div>
                </li>
        ))}
        </ul>
        </div>
        </>
    )
            }
export default productDetails;