import React from 'react';
import './Product.css';

import { FaRegHeart } from 'react-icons/fa';

import { useState } from "react"; 
import { useHref } from 'react-router-dom';


const Product = (props) => {
//     const [active, setActive] = useState(1);    
// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(false);
// const getPosts = async () => {
//     setLoading(true);
//     const response = await fetch("../../../public/products.json");
//     const json = await response.json();
//     setData(json?.Filter((post) => post.id <= 10));
//     setLoading(false);
// };
// const onChange = (e) => {
//   console.log(e.target.value);
// };
    return (
        <>
                <div className='most-popular-product'>
                    <div className='product-wrapper'>
                        <div className='product-image'>
                            <a href="/productDetails/:id">
                            <img className='most-popular-image' src={props.image} alt={props.title}/>
                            </a>
                            <div className='icon'>
                                <FaRegHeart className='love-icon' />
                            </div>
                        </div>
                        <div className='most-popular-product-content'>
                            <h4 className='most-popular-product-title'>
                            {props.title}        <br />
                                    <span className='description'>{props.description}</span>
                            </h4>
                            <ul>
                                <li><span>{props.price}</span></li>
                            </ul>
                            
                            {/* <ul>
                                {data.map((product) => (
                                <li key={product.id}>
                                <img 
                                src={'images/products/${product.image}'}
                                alt={product.name} className='most-popular-image'
                                />
                                <h4 className='most-popular-product-title'>{product.name}</h4>
                                <p className='description'>{product.description}</p>
                                <span>{product.price}</span>
                                </li>
                                ))}
                            </ul> */}
                        </div>
                        </div>
                        </div>
        </>
    )   
} 
export default Product;


// export default class Product extends React.Component{
//     componentDidMount(){
//         productsApi.getAll()
//         .then(data =>{
//             console.log({data});
//         });
//     }
//     render(){
//         return (
//             <div className='most-popular-product'>
//                 <div className='product-wrapper'>
//                         <div className='product-image'>
//                                     <img className='most-popular-image' alt=''/>
//                             <div className='icon'>
//                                     <FaRegHeart className='love-icon' />                             </div>
//                             </div>
//                             <div className='most-popular-product-content'>
//                                 <h4 className='most-popular-product-title'>
//                                     <br />
//                                     <span className='description'></span>
//                             </h4>
//                                 <ul>
//                                 <li><span></span></li>
//                             </ul>                               
//                         </div>
//                         </div>
//                         </div>
//         )
// }
// }