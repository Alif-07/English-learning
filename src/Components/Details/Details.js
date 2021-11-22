import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { userContext } from '../../App';
import './Details.css';

const Details = () => {
	const [service, setService] = useState([]);
	useEffect(() => {
		fetch(`/coursesFour2.json`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);
	const [user, setUser] = useContext(userContext);
	console.log(user.name);

	return (
		<Container className="mt-4">
			<h2 className="py-2mt-2">Course Provided by: {user.name}</h2>
			<div className="row">
				{service.map((course) => (
					<div className="col-md-4 my-2 p-2">
						<Card
							style={{ width: '18rem' }}
							className="border border-2 d-flex flex-column justify-content-center align-items-center p-3"
						>
							<Card.Title>{course?.name}</Card.Title>
							<Card.Img variant="top" src={course?.img} className="w-50" />
							<Card.Body>
								<Card.Title>{course?.name2}</Card.Title>
								<Card.Text>
									<p>Duration: {course?.duration}</p>
									<p>Price: {course?.price}</p>
									<p>{course?.info2.slice(0, 300)}</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Details;
