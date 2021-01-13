import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/main.css';

function Navbar() {
	const [sidebar, setSidebar] = useState(false)

	const showSidebar = () => setSidebar(!sidebar)

	return (
		<React.Fragment>
			<div className="navbar bg-gray-800 h-24 flex justify-start items-center">
				<Link to="#" className="menu-bars ml-12 text-4xl bg-transparent">
					<FaIcons.FaBars onClick={showSidebar}/>
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active nav-menu bg-gray-800 w-52 h-screen flex justify-center absolute top-0 left-0 transition duration-700 z-10' : 'nav-menu bg-gray-800 w-52 h-screen flex justify-center absolute top-0 -left-full transition duration-700 z-10'}>
				<ul className='nav-menu-items w-full flex flex-col px-2' onClick={showSidebar}>
					<li className="navbar-toggle pl-3 pt-8">
						<Link to="#" className='menu-bars text-white text-4xl'>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className='flex justify-start items-center py-2 pl-0 pr-4 list-none h-24'>
								<Link className="flex no-underline text-white text-2xl w-full h-full items-center justify-center py-0 px-2 rounded-lg hover:bg-blue-500" to={item.path}>
									<span className="ml-2">{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</React.Fragment>
	);
}

export default Navbar