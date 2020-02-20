import React, { Component } from 'react';
import './Contact.css';
import { IoIosMail, IoLogoGithub, IoMdPhonePortrait } from 'react-icons/io';

class Contact extends Component {
	render() {
		return (
			<div className="contact-wrapper">
				<div>
					<div className="contact">
						<IoIosMail size="34" style={{ marginRight: 15 }} />
						angineer01@naver.com
					</div>
					<div className="contact name">
						<IoLogoGithub size="34" style={{ marginRight: 15 }} />
						<a href="https://github.com/sangeunAhn?tab=repositories">sangeunAhn</a>
					</div>
					<div className="contact">
						<IoMdPhonePortrait size="34" style={{ marginRight: 15 }} />
						010-9232-5316
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
