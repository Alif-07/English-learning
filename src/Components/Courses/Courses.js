import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch(`./coursesFour.json`)
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);

	return (
		<Container id="course">
			<div className="text-start py-5">
				<h1>We offer courses for:</h1>
			</div>
			<div className="row">
				{courses.map((course) => (
					<div className="col-md-6 my-2 p-2 border border-2">
						<div className="row d-flex flex-row">
							<div className="col-md-6">
								<img src={course?.img} className="w-50" />
							</div>
							<div className="col-md-6">
								<h5>{course?.name}</h5>
								<p>{course?.info}</p>
								{/* <Link to={`./courses/${course?.id}`}>
									<button
										onClick={() => addToDetails(`${course?.id}`)}
										className="btn btn-outline-dark"
									>
										View Courses
									</button>
								</Link> */}
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Courses;
