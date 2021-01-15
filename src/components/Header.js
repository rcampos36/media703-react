import React from 'react'
import * as RiIcons from "react-icons/ri";

export class Header extends React.Component {
	render() {
		return (
			<div className="">
				<div class="logo-main text-5xl flex antialiased"><span className="border-r border-gray-300 mr-2 pr-2"><RiIcons.RiStackLine /></span>703</div>
			</div>
		)
	}
}

export default Header