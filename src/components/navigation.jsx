import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav>
			<div className='container'>
				<div className='nav-columns'>
					<div className='nav-column'>
						<div className='nav-label'>Menu</div>
						<ul className='nav-links'>
							<li>
								<NavLink to='/development' exact>
									Development
								</NavLink>
							</li>
							<li>
								<NavLink to='/motion-design' exact>
									Motion Design
								</NavLink>
							</li>
							<li>
								<NavLink to='/audiovisual' exact>
									Audiovisual Art
								</NavLink>
							</li>

							<li>
								<NavLink to='/services' exact>
									CV
								</NavLink>
							</li>
						</ul>
					</div>

					<div className='nav-column'>
						<div className='nav-contact-label'>Contact</div>

						<div className='nav-infos'>
							<ul className='nav-info'>
								<li>
									<NavLink to='/contact' exact>
										hello@viktorodman.se
									</NavLink>
								</li>
								<li>+46 (0) 70 886 1516</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
