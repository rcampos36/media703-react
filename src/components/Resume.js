import React from 'react';
import ResumeItem from './ResumeItem'
import axios from 'axios';

export class Resume extends React.Component {
	// this sets the state
	state = {
		resumes: [],
		isLoaded: false
	}

	//this is where we make the initial request
	componentDidMount() {
		axios.get('https://dev-wp-rc-dev.pantheonsite.io/wp-json/wp/v2/resume')
			.then(res => this.setState({
				resumes: res.data,
				isLoaded: true
			}))
			.catch(err => console.log(err));
	}

	render() {
		// pulling data from the state
		const { resumes, isLoaded } = this.state;
		if(isLoaded) {
			return (
				<div className="experience w-full px-20 py-12">
					<h1 className="uppercase text-3xl text-white antialiased mb-12 text-center">My Experience</h1>
					<ResumeItem key={resumes.id} />
				</div>
			);
		}
		return <h3>Loading...</h3>
	}
}

export default Resume