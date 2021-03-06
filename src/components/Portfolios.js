import React from 'react';
import PortfolioItem from './PortfolioItem'
import axios from 'axios';

export class Portfolios extends React.Component {
	// this sets the state
	state = {
		portfolios: [],
		isLoaded: false
	}

	//this is where we make the initial request
	componentDidMount() {
		axios.get('https://dev-wp-rc-dev.pantheonsite.io/wp-json/wp/v2/portfolio')
			.then(res => this.setState({
				portfolios: res.data,
				isLoaded: true
			}))
			.catch(err => console.log(err));
	}

	render() {
		// pulling data from the state
		const { portfolios, isLoaded } = this.state;
		if(isLoaded) {
			return (
				<div className="w-full px-20 py-12">
					<h1 className="mb-12 text-center uppercase text-3xl antialiased">My Work</h1>
					<PortfolioItem key={portfolios.id} />
				</div>
			);
		}
		return <h3>Loading...</h3>
	}
}

export default Portfolios