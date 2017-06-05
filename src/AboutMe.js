import React, { Component } from 'react'

import Menu from './Menu'

import './css/about-me.css'

export default class AboutMe extends Component {
	render() {
		const triangleUp = [
			'triangle-up'
			,'anim-bounce'
			,'anim-dur-1s'
			,'anim-ease-out'
			,'anim-repeat'
		].join(' ')
		return (
			<div>
				<div className='about-me-page-container'>
					<div className='about-me-container'>
						<h2>About</h2>
						<div className='text-container'>
							<p>
								Currently in the process
								of moving to Seattle,
								Matt O'Tousa
								is a front-end developer with an ever-growing
								knowledge of full-stack development.
							</p>
							<p>
								He wasn't always, though! Previously, he
								has worked professionally as a designer,
								audio engineer, and portrait artist
								in Chicago.
							</p>
							<p>
								Before that,
								he was attending Ball State University
								in Muncie, Indiana
								for Fine Art and, later, Telecommunications.
							</p>
							<p>
								Back further, a kid growing up in South Bend, Indiana
							</p>
							<p>
								And before that, well, he is not so sure,
								but he suspects that he "probably wasn't doing a whole
								lot of existing."
							</p>
						</div>
						<div className='center-contents'>
							<a href='/resume'>
								<h3>
									<i className='fa fa-file-text-o fa-lg' aria-hidden='true'></i> 
									<h6>RÉSUMÉ</h6>
								</h3>
							</a>
							<a href='mailto:matt@mattotousa.com'>
								<h3>
									<i className='fa fa-envelope-o fa-lg' aria-hidden='true'></i> 
									<h6>EMAIL</h6>
								</h3>
							</a>
							<a href='https://www.github.com/tattomoosa'>
								<h3>
									<i className='fa fa-github fa-lg' aria-hidden='true'></i> 
									<h6>GITHUB</h6>
								</h3>
							</a>
							<a href='https://www.freecodecamp.com/tattomoosa'>
								<h3>
									<i className='fa fa-free-code-camp fa-lg' aria-hidden='true'></i>
									<h6>FCC</h6>
								</h3>
							</a>
							<a href='https://www.linkedin.com/in/matt-otousa'>
								<h3>
									<i className='fa fa-linkedin fa-lg' aria-hidden='true'></i>
									<h6>LINKEDIN</h6>
								</h3>
							</a>
						</div>
					</div>

				</div>
				<div className='top-center-parent'
					onClick={this.props.prevPage}
				>
					<div
						className={triangleUp}
						style={{borderBottomColor: '#4286f4'}}
					></div>
				</div>
				<Menu
					color='#4286f4'
					onClick={this.props.onMenuClick}/>
			</div>
		)
	}
}
