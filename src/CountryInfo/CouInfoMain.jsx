import CountryInformation from './CountryInformation'; 
import React from 'react';
import Header from '../components/Header';
import './CountryInformation.css'; 


export default function CouInfoMain() { 
return ( 
	<div className="App"> 
	<Header />
	<center className="main-body">
	<CountryInformation /> 

	</center>
	</div> 
); 
} 

