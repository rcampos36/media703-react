import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/main.css';
import '../App.css';

function Navbar() {

	return (
		<React.Fragment>
			<nav className='nav-menu active nav-menu bg-blue-500 w-52 h-screen flex justify-center top-0 left-0 transition duration-700 z-10'>
				<ul className='nav-menu-items w-full flex flex-col px-2 py-12'>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className='flex justify-start items-center pl-0 pr-8 list-none h-10'>
								<NavLink exact={true} activeClassName='is-active' className="flex no-underline text-white text-2xl w-full h-full items-center justify-start py-2 px-2 relative" to={item.path}>
									<span className="ml-2 w-full">{item.title}</span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</React.Fragment>
	);
}

export default Navbar