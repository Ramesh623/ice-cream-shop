import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import'./Slider.css';
import sliderImg1 from '../Images/pic1.jpg'; 

const Slider = () => {
  return (
    <div className="slider-container">
        <div className="arrow" direction="left">
            <ArrowLeft/>
        </div>

        <div className="slide-wrapper">
            <div className="slide">
                <div className="img-container">
                <img src={sliderImg1} alt="slider" height='80%'/>
                </div>

                <div className="info-container">
                    <h1 className="title">SUMMER SAL</h1>
                    <p className="description">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</p>
                    <button className="info-button">SHOW NOW</button>
                </div>

             </div>

             <div className="slide">
                <div className="img-container">
                <img src={sliderImg1} alt="slider" height='80%'/>
                </div>

                <div className="info-container">
                    <h1 className="title">SUMMER SAL</h1>
                    <p className="description">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</p>
                    <button className="info-button">SHOW NOW</button>
                </div>

             </div>

             <div className="slide">
                <div className="img-container">
                <img src={sliderImg1} alt="slider" height='80%'/>
                </div>

                <div className="info-container">
                    <h1 className="title">SUMMER SAL</h1>
                    <p className="description">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</p>
                    <button className="info-button">SHOW NOW</button>
                </div>

             </div>

        </div>

        <div className="arrow" direction="right">
            <ArrowRight/>
        </div>

    </div>
  )
}

export default Slider;