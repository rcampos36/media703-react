import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import * as BsIcons from "react-icons/bs";

export class AboutMeItem extends React.Component {
	state = {
		about: [],
		isLoaded: false
	}

	// request for scf fields
	componentDidMount() {
		axios.get('https://dev-wp-rc-dev.pantheonsite.io/wp-json/wp/v2/pages')
			.then(res => this.setState({
				about: res.data,
				isLoaded: true
			}))
			.catch(err => console.log(err));
	}

	render() {
		// pulling data from the state
		const { about } = this.state;
		return (
			<div className="p-0 relative my-0 mb-24 flex">
				{ about.map(aboutme => (
						<React.Fragment>
							<div className="w-1/2 min-h-full" style={{backgroundImage: `url(${aboutme.acf.image})`}}></div>
							<div className="w-1/2 relative py-8 pl-10">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.name}</h1>
								<div className="text-gray-700 text-base uppercase tracking-wide mb-2 text-gray-800">{aboutme.acf.email}</div>
								<div className="mb-4 uppercase text-white tracking-wide text-sm text-gray-800">{aboutme.acf.phone}</div>
								<div className="text-white text-lg leading-6 mt-4 text-gray-800">{aboutme.acf.description}</div>
							</div>
						</React.Fragment>
					)) }
			</div>
		)
	}
}

export default AboutMeItem