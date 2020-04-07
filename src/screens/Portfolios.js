import React, { Component } from 'react';
import './Portfolios.css';
import { IoIosMail, IoLogoGithub, IoMdPhonePortrait } from 'react-icons/io';

class Portfolios extends Component {
	render() {
		return (
			<div className="portfolios-wrapper">
				<div className="portfolio">
					<a
						href="https://appadvice.com/app/2gloo-ec-9d-b4-ea-b8-80-eb-a3-a8-ec-9a-b0-eb-a6-ac-eb-8c-80-ed-95-99-ea-b5-90-eb-aa-a8-ec-9e-84/1486698699"
						style={{ width: '15%', borderWidth: 1, borderColor: 'black', borderRightStyle: 'solid' }}
					>
						<img src={require('../images/pt1.jpeg')} style={{ height: '100%', width: '100%' }} />
					</a>
					<div
						style={{
							marginLeft: 30,
							display: 'flex',
							flexDirection: 'column',
							fontSize: 15,
							paddingTop: 20,
						}}
					>
						<div style={{ fontSize: 30, marginBottom: 50 }}>2gloo(이글루) 앱</div>
						<div style={{ marginBottom: 20 }}>각 대학교들의 동아리, 모임들을 한곳에 모아놓은 앱</div>
						<div style={{ marginBottom: 20 }}>React Native / php / AWS</div>
						<a href="https://github.com/sangeunAhn/2gloo" style={{ width: 25 }}>
							<IoLogoGithub size="24" style={{ marginRight: 5 }} />
						</a>
					</div>
				</div>
				<div className="portfolio">
					<a
						href="https://happy-bhabha-ab7174.netlify.com/#/"
						style={{ width: '40%', borderWidth: 1, borderColor: 'black', borderRightStyle: 'solid' }}
					>
						<img src={require('../images/pt2.png')} style={{ height: '100%', width: '100%' }} />
					</a>
					<div
						style={{
							marginLeft: 30,
							display: 'flex',
							flexDirection: 'column',
							fontSize: 15,
							paddingTop: 20,
						}}
					>
						<div style={{ fontSize: 30, marginBottom: 50 }}>Popcorn Time</div>
						<div style={{ marginBottom: 20 }}>Popcorn Time 클론 코딩</div>
						<div style={{ marginBottom: 20 }}>React</div>
						<a href="https://github.com/sangeunAhn/Popcorn-Time" style={{ width: 25 }}>
							<IoLogoGithub size="24" style={{ marginRight: 5 }} />
						</a>
					</div>
				</div>
				<div className="portfolio">
					<a
						href="https://sangeunprismagram.netlify.com/#/"
						style={{ width: '40%', borderWidth: 1, borderColor: 'black', borderRightStyle: 'solid' }}
					>
						<img src={require('../images/pt3.png')} style={{ height: '100%', width: '100%' }} />
					</a>
					<div
						style={{
							marginLeft: 30,
							display: 'flex',
							flexDirection: 'column',
							fontSize: 15,
							paddingTop: 20,
						}}
					>
						<div style={{ fontSize: 30, marginBottom: 50 }}>인스타그램 (RN 제작중)</div>
						<div style={{ marginBottom: 20 }}>인스타그램 클론 코딩</div>
						<div style={{ marginBottom: 20 }}>
							React / React-Native / GraphQL / Apollo / Prisma / Heroku / Netlify
						</div>
						<div>
							<a href="https://github.com/sangeunAhn/prismagram" style={{ width: 25, marginRight: 10 }}>
								<IoLogoGithub size="24" style={{ marginRight: 5 }} />
							</a>
							<a href="https://github.com/sangeunAhn/prismagram-frontend2" style={{ width: 25 }}>
								<IoLogoGithub size="24" style={{ marginRight: 5 }} />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolios;
