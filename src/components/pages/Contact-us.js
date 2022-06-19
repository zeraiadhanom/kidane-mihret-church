import React, {Component} from 'react'

class ContactUs extends Component {
	
	render() {  
		
		return(
		  <div className="ContactUs">    
                   <div className="address">
                    
		   ኪዳነ ምህረት ተዋህዶ ቤተክርስትያን፡ ሳንድያጎ<br></br>
		  <p>Address:</p>
                  <p>2001 Ocean View Blvd, San Diego, CA 92113</p>
                  <p>Phone: (619) 795-7195 </p>
		   </div>
		   <h2 style={{display: "inline"}}>Direction </h2>
		 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.318789492812!2d-117.14095898544726!3d32.70415568099413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9536e07398477%3A0x67662d52f9361bb0!2sEritrean%20Kidane%20Mihret!5e0!3m2!1sen!2sus!4v1605109537129!5m2!1sen!2sus" style={{"width":"400", "height":"300", "frameborder":"0", "border":"0", "allowfullscreen":"", "aria-hidden":"false", "tabindex":"0"}} title="churchDircetion"></iframe>
               
		</div>
		)
	}
	
	
}

export default ContactUs;

