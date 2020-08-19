import React from 'react'

const devProjects = [
	{
		id: 1,
		subtitle: 'LP Store',
		title: 'React, Mongoose, Node',
		img: 'code.jpg',
		ghLink: 'link',
	},
	{
		id: 2,
		subtitle: 'Chat App',
		title: 'Socket io chat',
		img: 'temp.jpg',
		ghLink: 'https://github.com/solkatt/socket-chat',
	},
	{
		id: 3,
		subtitle: 'Post Forum',
		title: 'User based content posting',
		img: 'iol_18.jpg',
		ghLink: 'https://github.com/solkatt/user-based-content',
	},
	{
		id: 4,

		subtitle: 'BotQuiz',
		title: 'JavaScript Guessing Game',
		img: 'iol_18.jpg',
		ghLink: 'https://github.com/solkatt/Quiz-App',
	},
	{
		id: 5,
		subtitle: 'Audiovisual Art',
		title: 'Projection mapping installations',
		img: 'iol_18.jpg',
	},
	{
		id: 6,
		subtitle: 'Audiovisual Art',
		title: 'Projection mapping installations',
		img: 'iol_18.jpg',
	},
]

const Development = () => {
	return (
		<div className='page'>
			<div className='container'>
				<div className='development'>
					<div className='title'>
						<h1>Development Projects</h1>
					</div>

					<div className='grid'>
						{devProjects.map((devItem) => (
							<div className='grid-item' key={devItem.id}>
								<div className='dev-details'>
									<span>{devItem.subtitle}</span>
									<h2>{devItem.title}</h2>
								</div>
								<div className='dev-image'>
									<img
										src={require(`../assets/${devItem.img}`)}
										alt={devItem.title}
									/>
								</div>
							</div>
						))}
					</div>
					{/* <div className='row'>
					<h3>This is the work page</h3>
				</div> */}
				</div>
			</div>
		</div>
	)
}

export default Development
