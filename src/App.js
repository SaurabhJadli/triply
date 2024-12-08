// Frontend code 
// Filename - App.js
// Filename - App.js

import React from 'react';
import Regi from './Regi.js';
import Login from './Login.js';
import Home from './Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Plan from './plan_trip/Plan.jsx';
import SearchResult from './components/SearchResult.jsx';
import CurrencyConverter from './plan_trip/CurrencyConverter.jsx';
import CouInfoMain from './CountryInfo/CouInfoMain.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
  

export default function App() {
	return (
		<div>

		<BrowserRouter>
			<Routes>
        	<Route path="/" element={<Regi />}/>
        	<Route path="/login" element={<Login />}/>
			<Route path="/home" element={<Home />}/>

        	<Route path="/regi" element={<Regi />}/>
			<Route path="/currency" element={<CurrencyConverter />}/>
			<Route path="/country" element={<CouInfoMain />}/>

			<Route path="/about" element={<About />}/>
			<Route path="/contact" element={<Contact />}/>

        	<Route path="/plan" element={<Plan />}/>

			<Route path="/searchResult" element={<SearchResult />}/>
			
			</Routes>
		</BrowserRouter>
		</div>	
	);
}
