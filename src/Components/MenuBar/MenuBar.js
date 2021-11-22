import { NavLink } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
	return (
		<div id="MenuBar" className="MenuBar-container py-1">
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<div className="logo-img">
							{/* <img className="w-75" src={logo} alt="" /> */}
						</div>
					</div>
					<div className="col-md-10">
						<div className="menu-container ">
							<ul className="d-flex align-items-end justify-content-end ">
								<NavLink
									activeStyle={{
										fontWeight: 'bold',
										color: 'red',
									}}
									to="/home"
									className="items "
								>
									<li>Home</li>
								</NavLink>
								<NavLink
									activeStyle={{
										fontWeight: 'bold',
										color: 'red',
									}}
									to="/exam"
									className="items"
								>
									<li>Take an Exam</li>
								</NavLink>
								<NavLink
									activeStyle={{
										fontWeight: 'bold',
										color: 'red',
									}}
									to="/services"
									className="items"
								>
									<li>Services</li>
								</NavLink>
								<NavLink
									activeStyle={{
										fontWeight: 'bold',
										color: 'red',
									}}
									to="contact"
									className="items"
								>
									<li>Contact us</li>
								</NavLink>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
