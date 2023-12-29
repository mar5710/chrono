import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router  } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Provider } from 'react';
// import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
			<Router>
				<Header />
				<App />
				<Footer />
			</Router>
		{/* </Provider> */}
	</React.StrictMode>
)
