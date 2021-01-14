import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Portfolios from './components/Portfolios';
import Resume from './components/Resume';
import Navbar from './components/Navbar';

function App() {
  return (
  	<Router>
	    <div className="App flex">
	    	<div className="w-full relative">
		    	<Switch>
		      	<Route path='/' exact component={Portfolios} />
		      	<Route path='/resume' component={Resume} />
		      </Switch>
	      </div>
	      <Navbar />
	    </div>
    </Router>
  );
}

export default App;
