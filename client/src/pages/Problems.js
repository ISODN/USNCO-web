import React, {useState} from 'react';

//Components
import NavBar from '../components/NavBar';
import PageContents from '../components/PageContents';
import ListProblems from '../components/ListProblems';
import Footer from '../components/Footer';

const Problems = () => {
	return (
		<div className="App">
			<NavBar page="Problems"/>

			<PageContents page="Problems"/>
			<ListProblems/>

			<Footer/>
		</div>
	)
}

export default Problems;