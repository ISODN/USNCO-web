import React, {useState, useEffect} from 'react';
import axios from "axios";
import jwt from "jsonwebtoken";
import LoginHandler from './LoginHandler';

const Footer = (props) => {
	const [hidden, setHidden] = useState({});

	const viewable = () => {
		const token = localStorage.getItem("user_logged");
		let isAdmin;
		if (token) {
			jwt.verify(token, "jerdan1980", function (err, decoded) {
				if (decoded) {
					isAdmin = decoded.user_info.isAdmin;
				}
			});
		}
		//else not logged in or admin
		return (
			<>
				{(isAdmin || !hidden["home"]) ? <li><a class="nav-link" href="/">Home</a></li> : <></>}
				{(isAdmin || !hidden["faq"]) ? <li><a class="nav-link" href="/FAQ">FAQ</a></li> : <></>}
				{(isAdmin || !hidden["Problems"]) ? <li><a class="nav-link" href="/problems">Problems</a></li> : <></>}
				{(isAdmin || !hidden["nap"]) ? <li><a class="nav-link" href="/nap">NAP</a></li> : <></>}
				{(isAdmin || !hidden["Guides"]) ? <li><a class="nav-link" href="/guides">Guides</a></li> : <></>}
				{(isAdmin || !hidden["Resources"]) ? <li><a class="nav-link" href="/resources">Resources</a></li> : <></>}
				{(isAdmin || !hidden["about"]) ? <li><a class="nav-link" href="/about">About</a></li> : <></>}
			</>
		)
	}

	useEffect(() => {
		let map = {};
		axios.get(`/api/user/get_page`) 
			.then(res => {
				let item;
				for (item of res.data) {
					map[item.page] = item.hidden;
				};
				console.log(map);
				setHidden(map);
		});
	}, []);

	//handles how to present the login/logout buttons
	const logged = () => {
		if(localStorage.getItem("user_logged")) {
			return <a onClick={handleLogout}>Logout</a>
		} else {
			return <LoginHandler/>
		}
	}

	const handleLogout = () => {
		localStorage.removeItem("user_logged");
		window.location.reload(true);
	}

	return (
		<>
			<p class="py-5 my-5"/>
			<div class="four-c-gray">
				<p class="py-4"/>
				<div class="container-fluid navbar navbar-expand-sm navbar-dark justify-content-around pb-0">
					<nav role="navigation">
						<ul class="navbar-nav smol">
							{viewable()}
							<li class="nav-link">{logged()}</li>
						</ul>
					</nav>
				</div>
				<p class="text-muted smoller mb-0 pb-2 pb-md-5"><i>-Chemistry Olympiads Discord Server-</i></p>
			</div>
		</>
	);
}

export default Footer;