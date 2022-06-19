import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const flickrImages = [
  
  'https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg',
  'https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg',
  'https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg',
  'https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg'
];

class Photos extends Component {
    constructor(props) {
         super(props);
         this.state = {
         images: flickrImages,
         selectedImage: flickrImages[0],
    };
  }

    render() {
  const {images} = this.state;
        return (
          <Carousel infiniteLoop autoPlay showThumbs={true} style={{height: "100%"}}>
            
          {images.map((image, index) => (
            <div key={index}><img src={image} alt="bird" style={{"padding": "20px"}}/>
            </div>
          ))}   
    </Carousel>
    
        );
    }
  }
 
export default Photos;