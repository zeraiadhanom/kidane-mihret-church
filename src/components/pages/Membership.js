import React, {Component} from "react";
import "./Donation.css"
import Checkout from "./Checkout"
import axios from 'axios';
import M from 'materialize-css';
import Button from '@material-ui/core/Button';

class Membership extends Component {
  constructor(props) {
    super(props);

this.state = {
   firstname: "",
   LastName: "",
   eaddress: "",
   Phone: "",
   comment: ""
    };

this.handleSubmit = this.handleSubmit.bind(this)
this.onChange = this.onChange.bind(this)
}

onChange(e) {
 this.setState({[e.target.name]: e.target.value});
}

handleSubmit(event) {
 event.preventDefault();
 const newUser={
   firstname: this.state.firstname,
   LastName: this.state.LastName,
   eaddress: this.state.eaddress,
   Phone: this.state.Phone,
   comment: this.state.comment	
 }
 
 //need to improve this;
this.setState({firstname: "", LastName: "", eaddress: "",Phone: "", comment: ""})

axios.post('http://localhost:8000/users/register', newUser)
 .then(res => console.log(res.data))
 .catch(err => console.log(err.response.data));	
}
    render() {
  return(
  <div className="Membership">
  <div class="cards">
  <div className="card">
  <h1>Please donate</h1>
    Thank you for considering a donation or a gift to our church! You can make a contribution now by clicking the Donate button on this page.<br></br>
    You can choose to use either PayPal or your credit card.Tax-deductible financial gifts for church Services can be made by check, credit card <br></br>
    or bank transfers. To make donations using a credit card or bank transfer, click on the PayPal button on this page.<br></br>
    <br></br>
              
    To make donations using checks, make checks payable to Kidane-Mihret church Services and send to:<br></br>
    <br></br>
     Kidane Mihret Orthodox Church <br></br>
     2001 Ocean View Blvd, <br></br>
     San Diego, CA 92113  <br></br>
     Phone: (619) 795-7195 <br></br> 
     <br></br>
     Please let us know if you would like your gift designated to one of our specific projects
    </div>
  <div className="card">
  <h1>Donate</h1>
         < Checkout />
    </div>
   </div>
   <div className="cards2">
   <div className="card2_1">
   <form onSubmit={this.handleSubmit}>
        <p>Please contact us and leave your comment below</p>
             <label htmlfor="firstName">First Name: </label>
             <input type="text" value={this.state.firstname} onChange={event => this.setState({ firstname: event.target.value })}id="firstname" name="firstname" placeholder="Your name.."/><br></br>
            <label for="firstName">Last Name: </label>
			<input type="text" value={this.state.LastName} onChange={event => this.setState({ LastName: event.target.value })}id="LastName" name="lastName" placeholder="Your Last name.."/><br></br>
			<label for="e-mail">E-mail : </label>
            <input type="text" value={this.state.eaddress} onChange={event => this.setState({ eaddress: event.target.value })}id="eaddress" name="email" placeholder="Enter your e-mail address.." pattern=".+@+.com" size="30" required/><br></br>
			<label for="phone"> Phone # : </label>
            <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.Phone} onChange={event => this.setState({ Phone: event.target.value })} id="Phone" name="phone" placeholder="666-555-4545"/><br></br>
	
			<label for="comment"> Comment : </label>
            <input type="text" value={this.state.comment} onChange={event => this.setState({ comment: event.target.value })}id="comment" name="comment" placeholder="Write your comment.."/><br></br>
            <button class="waves-effect waves-light btn"> Submit</button><br></br>
		  </form> 
   </div>
   </div>
  
 </div>
  )
}


}

export default Membership;