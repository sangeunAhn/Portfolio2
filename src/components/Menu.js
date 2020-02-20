import React from 'react';
import './Menu.css';

const Menu = ({ onClick, menuState }) => {
	return (
		<div className="menu-wrapper">
			<div className="menus">
				<div
					className="menu"
					onClick={() => onClick('about')}
					style={menuState === 'about' ? { color: 'white' } : { color: '#adb5bd' }}
				>
					About
				</div>
				<div
					className="menu"
					onClick={() => onClick('portfolios')}
					style={menuState === 'portfolios' ? { color: 'white' } : { color: '#adb5bd' }}
				>
					Portfolios
				</div>
				<div
					className="menu"
					onClick={() => onClick('contact')}
                    style={menuState === 'contact' ? { color: 'white' } : { color: '#adb5bd' }}
				>
					Contact
				</div>
			</div>
		</div>
	);
};

export default Menu;
