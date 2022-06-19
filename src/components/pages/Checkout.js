
import React, {useState} from 'react'
import banks from "./banks.jpg"


import StripeCheckout from "react-stripe-checkout"
function Checkout() {
	
  const [ state, setState, product, setProduct] = useState({
    name: "Donation",
    price: "" * 100,
    productBy: "" 
  })

const handleInputChange = (event) => {
  setState((prevProps) => ({
    ...prevProps,
    [event.target.name]: event.target.value
  }));
}

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(state)
}
  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return fetch(`http://localhost:8080/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE zerai", response)
      const {status} = response;
      console.log("STATUS", status)
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="Checkout" style={{"width": "250px","padding-top": "10px", "margin-left": "auto",
    "margin-right": "auto"}}>
      <header className="App-header">
        <form onSubmit={handleSubmit} style={{margin: "auto"}}>
          <div>
           <label  style={{color:"black", width: "220px", "font-size": "20px", "text-align": "center", padding: "10px"}}>Enter amount
           <input type="number"
           name="price"
           value={state.price}
           onChange={handleInputChange}
           required/>
           </label>
           </div>
        <StripeCheckout stripeKey="pk_test_51ICULgCz9zrKGyExUk2SZtT9JbjMDifBiTO2VWrRzXWPldEAWMamqUfUUQPpGnBeyWeLgeClANyDbrDBby7g9cIj002MV5C4dK"
         token={makePayment}
         name="Enter your detail"
         amount={state.price}
         shippingAddress
         billingAddress
         >
        <button style={{width: "150px", background: "green", margin: "5px", height: "50px"}}class="">Button</button>
        </StripeCheckout>
        < img src={banks} alt="banks" style={{"width": "220px", "margin": "auto", "height": "120px", "padding-top":"25px", "padding-right":"10px"}}/>
        </form>

      </header>
    </div>
  );
}

export default Checkout;
