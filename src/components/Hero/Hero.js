import './Hero.css';

import image1 from '../assets/images/image1.svg';
import image2 from '../assets/images/image2.svg';
import icons from '../assets/images/icons.svg';

const Hero = () => {
    return(
        <div className="container">
            <div className="child">
            <img className='image2' src={image2} alt='image2' />
            <h2>Get 50%  Off on Selected categories</h2>
            <img className='image1' src={image1} alt='image1' />
            <img className='icons' src={icons} alt='icons' />
            </div>
        </div>
    )
}
export default Hero;