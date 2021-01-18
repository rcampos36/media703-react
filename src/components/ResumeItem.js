import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import * as BsIcons from "react-icons/bs";

export class ResumeItem extends React.Component {
	state = {
		resumes: [],
		isLoaded: false
	}

	// request for scf fields
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
		const { resumes } = this.state;
		return (
			<div className="timeline p-0 relative my-0 mx auto">
				{ resumes.map(resume => (
						<React.Fragment>
							<div className="education-wrapper w-1/2 relative py-8 pl-10">
								<h1 className="overflow-hidden text-white text-3xl mb-2">{resume.acf.job_title}</h1>
								<div className="text-gray-700 text-base uppercase tracking-wide mb-2">{resume.acf.job_position}</div>
								<div className="mb-4 uppercase text-white tracking-wide text-sm">{resume.acf.job_date}</div>
								<div className="text-white text-lg leading-6 mt-4">{resume.acf.job_description}</div>
							</div>
						</React.Fragment>
					)) }
			</div>
		)
	}
}

export default ResumeItem