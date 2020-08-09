import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import Hooks from './components/Hooks/Hooks'
import Three from './components/Three/Three'

function App() {
	return (
		<div className='App'>
			<Hooks />
			<Three />
			<Header />
		</div>
	)
}

export default App
