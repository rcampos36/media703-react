import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
	{
		title: 'Portfolio',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Resume',
		path: '/resume',
		icon: <AiIcons.AiOutlinePaperClip />,
		cName: 'nav-text'
	}
]