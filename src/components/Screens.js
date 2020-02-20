import React from 'react';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Portfolios from '../screens/Portfolios';
import './Screens.css';

const Screens = ({ menu }) => {
	return (
		<div className="screen-wrapper">
			{menu === 'about' ? <About /> : menu === 'portfolios' ? <Portfolios /> : <Contact />}
		</div>
	);
};

export default Screens;
