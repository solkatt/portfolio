import React from 'react'

import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
import ThreeAnimation from './three'
import ThreeAnimationTwo from './threeTwo'
const Banner = () => {
	return (
		<section className='main'>
			<div className='banner-container'>
				<div className='row'>
					<div className='animation'>
						{/* <ThreeAnimation /> */}
						<ThreeAnimationTwo />
					</div>
					<h1>
						<div className='line'>
							<span>Viktor Ödman</span>
						</div>
					</h1>
					<h2>
						<div className='line'>
							<span>Web Developer / Audiovisual Designer</span>
						</div>
					</h2>
					{/* <div className='btn-row'>
						<a href='/'>
							Kika in min bastu <RightArrow />{' '}
						</a>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default Banner
