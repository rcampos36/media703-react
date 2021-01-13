import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class PortfolioItem extends React.Component {
	state = {
		portfolios: [],
		isLoaded: false
	}

	// request for scf fields
	componentDidMount() {
		axios.get('http://react-wp-backend.test/wp-json/wp/v2/portfolio')
			.then(res => this.setState({
				portfolios: res.data,
				isLoaded: true
			}))
			.catch(err => console.log(err));
	}

	render() {
		// pulling data from the state
		const { portfolios } = this.state;
		return (
			<div className="p-8 grid grid-cols-2 gap-8">
				{ portfolios.map(portfolio => (
						<React.Fragment>
							<div className="relative border-b-4 border-blue-400">
								<div className="absolute w-5/6 bottom-0 bg-white p-8">
									<h4 className="text-4xl font-bold mb-8 hover:text-blue-400">{portfolio.acf.portfolio_title}</h4>
									<Link to={{pathname: `${portfolio.acf.portfolio_link}` }} className="text-xl font-bold text-gray-500">{portfolio.acf.portfolio_link_text}</Link>
								</div>
								<div className="image-card w-full min-h-20-rem pt-full bg-cover" style={{backgroundImage: `url(${portfolio.acf.portfolio_image})`}}>
								</div>
							</div>
						</React.Fragment>
					)) }
			</div>
		)
	}
}

export default PortfolioItem