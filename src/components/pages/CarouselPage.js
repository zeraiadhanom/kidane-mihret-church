import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../../images/Kidane_Mihret_1.jpg"
import Image2 from "../../images/Kidane_Mihret_2.jpg"
import Image3 from "../../images/Kidane-Mihret_3.jpg"
import Image4 from "../../images/image1.jpeg"
import Image5 from "../../images/image2.jpeg"
import Image6 from "../../images/image3.jpeg"

 
class CarouselPage extends Component {
    render() {
        return (
             <Carousel infiniteLoop autoPlay showThumbs={false}>
                <div>
                    <img src={Image1} alt="photo1" style={{"width":"90%", "height":"550px", "border-radius":"20px"}}/>
                    
                </div>
                <div>
                    <img src={Image2} alt="photo1" style={{"width":"90%", "height":"550px", "border-radius":"20px"}}/>
                    
                </div>
                <div>
                    <img src={Image3} alt="photo1" style={{"width":"90%", "height":"550px", "border-radius":"20px"}}/>
                    
                </div>
				 <div>
                    <img src={Image4} alt="photo1" style={{"width":"90%", "height":"550px", "border-radius":"20px"}}/>
                    
                </div>
				<div>
                    <img src={Image5} alt="photo1" style={{"width":"90%", "height":"550px", "border-radius":"20px"}}/>
                    
                </div>
				<div>
                    <img src={Image6} alt="photo1" style={{"width":"90%", "height":"550px", "border-radius":"20px"}}/>
                    
                </div>
            </Carousel>
        );
    }
  }
 
export default CarouselPage;

