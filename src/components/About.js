import React from 'react';
import AboutMeItem from './AboutMeItem'
import axios from 'axios';

export class About extends React.Component {
	// this sets the state
	state = {
		aboutme: [],
		isLoaded: false
	}

	//this is where we make the initial request
	componentDidMount() {
		axios.get('https://dev-wp-rc-dev.pantheonsite.io/wp-json/wp/v2/resume')
			.then(res => this.setState({
				aboutme: res.data,
				isLoaded: true
			}))
			.catch(err => console.log(err));
	}

	render() {
		// pulling data from the state
		const { aboutme, isLoaded } = this.state;
		if(isLoaded) {
			return (
				<div className="w-full px-20 py-12">
					<h1 className="uppercase text-3xl text-gray-800 antialiased mb-12 text-center">About Me</h1>
					<AboutMeItem key={aboutme.id} />
				</div>
			);
		}
		return <h3>Loading...</h3>
	}
}

export default About