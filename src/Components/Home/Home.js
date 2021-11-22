import React from 'react';
import Courses from '../Courses/Courses';
import Banner from './Banner/Banner';

import './Home.css';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Courses></Courses>
		</div>
	);
};

export default Home;
