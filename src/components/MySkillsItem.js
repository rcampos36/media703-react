import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from 'react-animated-progress-bar';
// import * as BsIcons from "react-icons/bs";

export class MySkillsItem extends React.Component {
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
							<div className="w-full relative py-8 flex flex-wrap">
								<div className="w-1/3 flex flex-col items-center">
									<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_one}</h1>
									<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_two}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_three}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_four}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_five}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_six}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_seven}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_eight}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_nine}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
								<div className="w-1/3 flex flex-col items-center">
								<h1 className="overflow-hidden text-white text-3xl mb-2 text-gray-800">{aboutme.acf.skills_title_ten}</h1>
								<ProgressBar width="300" trackWidth="13" percentage="60" />
								</div>
							</div>
						</React.Fragment>
					)) }
			</div>
		)
	}
}

export default MySkillsItem