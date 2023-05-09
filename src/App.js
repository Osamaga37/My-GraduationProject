import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Header } from './components/index';
import Home from '../src/Pages/Home/Home';
import More  from '../src/Pages/More/More';
import productDetails from './components/productDetails/productDetails';

const App = () => {
    return(
        <BrowserRouter>
        <Header />
        <allProducts />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/More' element={<More />} />
            <Route path='/productDetails/:id' element={productDetails} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;