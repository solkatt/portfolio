import React, { Component } from 'react'
import jump from 'jump.js'
import easeInOutQuad from '../utils/easing'

import './Header.css'
export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.jumpFunction = this.jumpFunction.bind(this)
	}

	jumpFunction() {
		const jumpTest = document.querySelector('.jump-test')

		jump(jumpTest, {
			duration: 2000,
			easing: easeInOutQuad,
		})
	}

	render() {
		return (
			<div>
				<div className='header'>
					<h3>Header</h3>
					<button type='button' onClick={this.jumpFunction}>
						Jump
					</button>
				</div>

				<div className='jump-test'>
					<h3>JUMP HERE</h3>
				</div>
			</div>
		)
	}
}
