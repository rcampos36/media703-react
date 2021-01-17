import React from 'react'
import * as RiIcons from "react-icons/ri";
import { Link } from 'react-router-dom';

export class Header extends React.Component {
	render() {
		return (
			<div className="">
			<router>
				<div class="logo-main text-5xl flex antialiased"><Link to="/" className="flex"><span className="border-r border-gray-300 mr-2 pr-2"><RiIcons.RiStackLine /></span>703</Link></div>
			</router>
			</div>
		)
	}
}

export default Header