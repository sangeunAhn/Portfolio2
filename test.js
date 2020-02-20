import React, { Component } from 'react';
import styled from 'styled-components';
import face from './images/face.jpeg';
import { IoIosMail, IoLogoGithub, IoMdPhonePortrait } from 'react-icons/io';

const Container = styled.div`
	display: flex;
	height: 100vh;
	font-family: BMDOHYEON;
`;

const LeftScreen = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	color: #495057;
	background-color: #e9ecef;
	align-items: center;
	justify-content: center;
	padding-bottom: 50px;
`;

const RightScreen = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2;
	background-color: #6cdbb2;
	padding: 30px;
`;

const Picture_Name = styled.div`
	margin-bottom: 30px; 
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Profile = styled.div``


class Screen extends Component {
	render() {
		return (
			<Container>
				<LeftScreen>
					<Picture_Name>
						<img
							src={face}
							style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 15 }}
							alt="logo"
						/>
						<div style={{ textAlign: 'center', fontSize: 17 }}>안 상 언</div>
					</Picture_Name>
					<Profile>
						<div style={{ display: 'flex', alignItems: 'center', fontSize: 14, marginBottom: 7 }}>
							<IoIosMail size="24" />
							angineer01@naver.com
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								fontSize: 14,
								cursor: 'pointer',
								marginBottom: 7,
							}}
						>
							<IoLogoGithub size="24" style={{ marginRight: 5 }} />
							<a href="https://github.com/sangeunAhn?tab=repositories">sangeunAhn</a>
						</div>
						<div style={{ display: 'flex', alignItems: 'center', fontSize: 14, marginBottom: 7 }}>
							<IoMdPhonePortrait size="24" style={{ marginRight: 5 }} />
							010-9232-5316
						</div>
					</Profile>
				</LeftScreen>
				<RightScreen>
					<div style={{ fontSize: 30, marginBottom: 15, textAlign: 'center', minWidth: 500 }}>포트폴리오</div>
					<div
						style={{
							display: 'flex',
							flex: 2,
							marginBottom: 15,
							backgroundColor: '#f1f3f5',
							boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
						}}
					>
						<a
							href="https://appadvice.com/app/2gloo-ec-9d-b4-ea-b8-80-eb-a3-a8-ec-9a-b0-eb-a6-ac-eb-8c-80-ed-95-99-ea-b5-90-eb-aa-a8-ec-9e-84/1486698699"
							style={{ width: '15%', borderWidth: 1, borderColor: 'black', borderRightStyle: 'solid' }}
						>
							<img src={require('./images/pt1.jpeg')} style={{ width: '100%' }} />
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
					<div
						style={{
							display: 'flex',
							flex: 2,
							marginBottom: 15,
							backgroundColor: '#f1f3f5',
							boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
						}}
					>
						<a
							href="https://determined-joliot-f426b7.netlify.com"
							style={{ width: '30%', borderWidth: 1, borderColor: 'black', borderRightStyle: 'solid' }}
						>
							<img src={require('./images/pt2.png')} style={{ width: '100%' }} />
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
							<div style={{ fontSize: 30, marginBottom: 50 }}>Apollo Note</div>
							<div style={{ marginBottom: 20 }}>GraphQL/Apollo를 이용하여 만든 간단한 노트</div>
							<div style={{ marginBottom: 20 }}>React / GraphQL / Apollo / Netlify</div>
							<a href="https://github.com/sangeunAhn/apollonote" style={{ width: 25 }}>
								<IoLogoGithub size="24" style={{ marginRight: 5 }} />
							</a>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flex: 2,
							marginBottom: 15,
							backgroundColor: '#f1f3f5',
							boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
						}}
					>
						<a
							href="https://sangeunprismagram.netlify.com/#/"
							style={{ width: '30%', borderWidth: 1, borderColor: 'black', borderRightStyle: 'solid' }}
						>
							<img src={require('./images/pt3.png')} style={{ width: '100%' }} />
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
							<div style={{ marginBottom: 20 }}>인스타그램 클론코딩</div>
							<div style={{ marginBottom: 20 }}>
								React / React-Native / GraphQL / Apollo / Prisma / Heroku / Netlify
							</div>
							<div>
								<a
									href="https://github.com/sangeunAhn/prismagram"
									style={{ width: 25, marginRight: 10 }}
								>
									<IoLogoGithub size="24" style={{ marginRight: 5 }} />
								</a>
								<a href="https://github.com/sangeunAhn/prismagram-frontend2" style={{ width: 25 }}>
									<IoLogoGithub size="24" style={{ marginRight: 5 }} />
								</a>
							</div>
						</div>
					</div>
				</RightScreen>
			</Container>
		);
	}
}

export default Screen;