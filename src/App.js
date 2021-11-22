import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import MenuBar from './Components/MenuBar/MenuBar';
import Courses from './Components/Courses/Courses';
import TakeAnExam from './Components/TakeAnExam/TakeAnExam';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import { createContext, useState } from 'react';

export const userContext = createContext();
function App() {
	const [user, setUser] = useState({
		name: 'British Council',
	});
	return (
		<div className="App">
			<userContext.Provider value={[user, setUser]}>
				<Router>
					<div>
						<MenuBar></MenuBar>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/home">
								<Home />
							</Route>
							<Route exact path="/exam">
								<TakeAnExam />
							</Route>
							<Route exact path="/courses">
								<Courses></Courses>
							</Route>
							<Route exact path="/services">
								<Details></Details>
							</Route>
							<Route path="/contact">
								<Contact></Contact>
							</Route>
							<Route path="*">
								<Error></Error>
							</Route>
						</Switch>
						<Footer></Footer>
					</div>
				</Router>
			</userContext.Provider>
		</div>
	);
}

export default App;
