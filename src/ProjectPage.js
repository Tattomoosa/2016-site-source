import React, { Component } from 'react'

import './css/project-page.css'
import './css/animations.css'

export default class ProjectPage extends Component {
	render() {
		const {
			projectName = 'Missing Project Name'
			,projectDescription = 'Missing Project Description'
			,techDescription = 'Missing Tech Description'
			,desktopImage = 'Missing Image'
			,color = '#4286f4'
			} = this.props
		const bgStyle = {
			background: color
			,borderColor: color
			}
		const triangle = [
			'triangle-down'
			,'anim-bounce'
			,'anim-dur-1s'
			,'anim-ease-out'
			,'anim-repeat'
		].join(' ')

		return (
			<div>
				<div className='project-page-bg' style={bgStyle}></div>
				<div className='project-page-container'>
					<h2
						className='project-page-header'
						style={{background: color}}
					>
						{projectName}
					</h2>
					<div className='project-page-description'>
						<br/>
						{projectDescription}
						<br/>
						<br/>
						{techDescription}
					</div>
					<img
						src={require(desktopImage)}
						alt={'A screenshot of ' + projectName}
						style={{borderColor: color}}
					/>
				</div>
				<div className='bottom-center-parent'>
					<div className={triangle}></div>
				</div>
			</div>
		)
	}
}
