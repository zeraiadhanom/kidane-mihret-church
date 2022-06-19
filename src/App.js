import {MemoryRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Church from './components/pages/Church'
import ContactUs from './components/pages/Contact-us'
import Archive from './components/pages/Archives'
import Services from './components/pages/Services'
import Membership from './components/pages/Membership'
import Teaching from './components/pages/Teaching'
import SundayService from './components/pages/SundayService'
import Videos from './components/pages/Videos'
import Photos from './components/pages/Photos'
import Forms from './components/pages/Forms'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/our-church' component={Church}/>
      <Route path='/services' component={Services}/>
       <Route path='/membership' component={Membership} />
      <Route path='/archive' component={Archive}/>
      <Route path='/contact-us' component={ContactUs}/>
       <Route path='/Teaching' component={Teaching}/>
      <Route path='/SundayService' component={SundayService}/>
	  <Route path='/Photos' component={Photos}/>
	  <Route path='/Videos' component={Videos}/>
	  <Route path='/Forms' component={Forms}/>
     
      </Switch>
      <footer className="footer-distributed">
		  <div className="footer-left">
		  <h4>ኪዳነ ምህረት ኤርትራ ተዋህዶ ኦርቶዶክስ ቤተክርስትያን፡ ሳንድያጎ</h4>
		  <p class="footer-company-name">COPYRIGHT © 2021 Kidane-Mihret Eritrean Tewahdo Orthodox church San Diego.</p>
		  </div>
		  <div class="footer-center">
		  
		  <i class="fa fa-map-marker"></i>
			<p>2001 Ocean View Blvd,
				San Diego<br></br>
				CA 92133</p>
			   <div>
					<i class="fa fa-phone"></i>
					<p>(619) 795-7195</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:kmihret3@gmail.com">Contact via email</a></p>
				</div>
		  </div>
		  <div class="footer-right">
				<p class="footer-company-about">
					<span>Kidane-Mihret Eritrean Tewahdo Orthodox church San Diego</span>
					This website is designed to spread the Gospel to the world as accepted by the Apostles 
					of our Lord Jesus Christ according to the Eritrean
					Orthodox Tewahedo Church`s belief. We welcome you to explore and learn about our church and its beliefs..</p>
				<div class="footer-icons">
					<a href="!#"><i class="fa fa-facebook"></i></a>
					<a href="!#"><i class="fa fa-twitter"></i></a>
					<a href="!#"><i class="fa fa-instagram"></i></a>
					<a href="!#"><i class="fa fa-linkedin"></i></a>
					<a href="!#"><i class="fa fa-youtube"></i></a>
				</div>
			</div>
            
        </footer>
           
    </Router>
  );
}

export default App;
