import React, {Component} from 'react';
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg from  "../../images/img-9.jpg"


const urls = [
   "https://www.youtube.com/embed/B9GTQq1C0jc?controls=0",
    "https://www.youtube.com/watch?v=7zY3fdHEJUg",
   "https://www.youtube.com/watch?v=UqDZMOx-xWA",

]

class Videos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: urls,
			selectedVideo: urls[0],
		}
	}
	
	render() {
	const {videos} = this.state
		return(
		<div className="List">
		<p style={{"text-align": "center","font-size": "20px","color": "black", "display": "inline-block"}}>Kidane-Mihret Anual celebration videos</p>
		
		    
          {videos.map((video, index) => (
		  <div style={{"padding": "20px"}}key={index}>
			<ReactPlayer url={video} style={{ "height": "600", "display": "block", "margin": "0 auto"}}/>
            </div>
          ))}   
     
	 </div>
		
		)
	}
}

export default Videos