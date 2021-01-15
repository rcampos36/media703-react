import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as BsIcons from "react-icons/bs";

export class PortfolioItem extends React.Component {
	state = {
		portfolios: [],
		isLoaded: false
	}

	// request for scf fields
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
		const { portfolios } = this.state;
		return (
			<div className="p-8 grid grid-cols-2 gap-10">
				{ portfolios.map(portfolio => (
						<React.Fragment>
							<div className="relative border-b-4 border-blue-400">
								<div className="absolute w-5/6 bottom-0 bg-white p-8">
									<h4 className="text-4xl font-bold mb-8 hover:text-blue-400">{portfolio.acf.work_name}</h4>
									<Link to={{pathname: `${portfolio.acf.work_url}` }} className="text-xl text-gray-500 flex items-center hover:text-blue-400">{portfolio.acf.work_link_text}<span className="ml-2 text-2xl"><BsIcons.BsArrowRight /></span></Link>
								</div>
								<div className="image-card w-full min-h-20-rem pt-full bg-cover" style={{backgroundImage: `url(${portfolio.acf.work_image})`}}>
								</div>
							</div>
						</React.Fragment>
					)) }
			</div>
		)
	}
}

export default PortfolioItem