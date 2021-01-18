import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Portfolios from './components/Portfolios';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
  	<Router>
	    <div className="App flex flex-row-reverse">
	    	<div className="content relative w-full flex">
	    		<div className="w-full">
			    	<Switch>
			      	<Route path='/' exact component={Portfolios} />
			      	<Route path='/about' component={About} />
			      	<Route path='/resume' component={Resume} />
			      </Switch>
		      </div>
	      </div>
	      <Navbar />
	    </div>
    </Router>
  );
}

export default App;
