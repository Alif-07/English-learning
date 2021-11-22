import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Footer.css';

const Footer = () => {
	const [user, setUser] = useContext(userContext);
	return (
		<div>
			<div className="footer-container">
				<div>
					<h4>&copy; {user.name}</h4>
				</div>
				<div className="container">
					<div className="row d-flex flex-column justify-content-center align-items-center">
						<div className="col-md-6">
							<ul className="d-flex flex-row justify-content-center align-items-center">
								<li className="footer-menu mx-4">
									<i class="fab fa-facebook-square fa-3x"></i>{' '}
								</li>
								<li className="footer-menu mx-4">
									<i class="fab fa-twitter-square fa-3x"></i>
								</li>

								<li className="footer-menu mx-4">
									<i class="fab fa-instagram-square fa-3x"></i>
								</li>
								<li className="footer-menu mx-4">
									<i class="fab fa-youtube-square fa-3x"></i>
								</li>
							</ul>
						</div>
						<div className="col-md-6">
							<div className="footer-menu-container">
								<ul className="d-flex flex-row justify-content-center align-items-center">
									<li className="footer-menu mx-3">Home</li>
									<li className="footer-menu mx-3">Services</li>
									<li className="footer-menu mx-3">Contact us</li>
									<li className="footer-menu mx-3"> About us</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
