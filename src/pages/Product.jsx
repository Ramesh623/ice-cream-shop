import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import './Product.css';


const Product = () => {
  return (
    <div className="pro-container">
        <Announcement/>
        <Navbar/>
        <div className="pro-wrapper">
          <div className="pro-image-container">
            <img className="pro-image" src="https://www.nicepng.com/png/detail/362-3620165_shalad-ice-cream-3d-png.png" alt="choco ice cream" />
          </div>

          <div className="pro-info-container">
            <h1 className="pro-title">Chocolate Ice Cream</h1>
            <p className="pro-desc">
              Chocolate ice cream is a flavour of ice cream which is teh second most common
              flavour of ice cream, after vanila. Chocolate ice cream is made by blending
              in cocoa powder in along wif teh eggs (optional), cream, vanila and sugar used
              to make ice cream a brown colour. Chocolate ice cream is used in teh creation
              of other flavours, such as rock road.               
            
            </p>
            <span className="pro-price"> Rs. 150</span>
            <div className="pro-filter-container">
            <div className="pro-filter">
                <span className="pro-filter-title">Corn Colour</span>
                  <div className="pro-filter-colour" style={{backgroundColor: "#A67F25"}}></div>
                  <div className="pro-filter-colour" style={{backgroundColor: "#73726F"}}></div>
                  <div className="pro-filter-colour" style={{backgroundColor: "#D90C8E"}}></div>
                  
              </div>

              
              
              <div className="pro-filter">
                <span className="pro-filter-title">Size</span>
                <select className="pro-filter-size" id="fil-size">
                  <option value="size1">100 ml</option>
                  <option value="size2">150 ml</option>
                  <option value="size3">200 ml</option>
                  <option value="size4">300 ml</option>
                  <option value="size5">400 ml</option>
                </select>
              </div>

            </div>
            <div className="pro-add-container">
              <div className="pro-amount-container">
                <Remove/>
                <span className="pro-amount">1</span>
                <Add/>
              </div>
              <button className="pro-button">ADD TO CART</button>


            </div>
          </div>
        </div>
        <Newsletter/>
        <Footer/>

    </div>
  )
}

export default Product