import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,Link } from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about';
import Shope from './pages/shope/shope';
import SingleProduct from './pages/singleProduct/singleProduct';
import { useDispatch, useSelector} from "react-redux"

function App() {

	

  return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shope' element={<Shope />} />
				<Route path='/about' element={<About />} />
				<Route path='/shope/:id' element={<SingleProduct />} />
			</Routes>
		</>
	)
}

export default App
