import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="productli-container">
        <Announcement/>
        <Navbar/>
        <h1 className="productli-title">Ice Creams</h1>
        <div className="filter-container">
            <div className="filter"><span className="filter-text">Filter Products:</span>
            <select className="filter-seletect" id="fil1">
                <option value="none" selected disabled hidden>Flavours</option>
                <option value="vanila">Vanila</option>
                <option value="choco">Chocolate</option>
                <option value="cookies">Cookies N' Cream</option>
                <option value="mintchoco">Mint Chocolate Cream</option>
                <option value="strawberry">Strawberry</option>
                <option value="buttered">Buttered Pecan</option>
            </select>

            <select className="filter-seletect" id="fil2">
                <option value="none" selected disabled hidden>Size</option>
                <option value="size1">100 ml</option>
                <option value="size2">150 ml</option>
                <option value="size3">200 ml</option>
                <option value="size4">300 ml</option>
                <option value="size5">400 ml</option>
            </select>
            
            </div>
            <div className="filter"><span className="filter-text">Sort Products:</span>
            <select className="filter-seletect" id="fil3">
                <option value="none" selected>Newest</option>
                <option value="sort1">Price (asc)</option>
                <option value="sort2">Price (desc)</option>
            </select>
    
            </div>
            
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>      
        
    </div>
  )
}

export default ProductList