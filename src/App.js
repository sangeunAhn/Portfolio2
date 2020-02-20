import React, { Component } from 'react';
import Menu from './components/Menu';
import Screens from './components/Screens';
import './App.css';

class App extends Component {
	state = {
		menu: 'about',
	};

	menuClick = menu => {
		this.setState({ menu });
	};

	render() {
    const {menu} = this.state;
		return (
			<div className="app">
				<Menu onClick={this.menuClick} menuState={menu} />
				<Screens menu={menu} />
			</div>
		);
	}
}

export default App;
