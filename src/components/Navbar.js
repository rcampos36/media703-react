import React from 'react'
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/main.css';
import '../App.css';
import Header from './Header';

function Navbar() {

	return (
		<React.Fragment>
			<nav className='nav-menu p-14 h-screen flex flex-col justify-center border-r border-grey-500 fixed top-0 left-0 transition duration-700 z-10'>
			<Header />
				<ul className='nav-menu-items w-full h-full flex justify-center items-start flex-col'>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className='flex justify-center list-none h-10 mb-4'>
								<NavLink exact={true} activeClassName='is-active' className="flex no-underline text-grey-600 text-2xl w-full h-full items-center justify-start py-2 px-2 relative" to={item.path}>
									<span className="uppercase leading-4 antialiased">{item.title}</span>
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