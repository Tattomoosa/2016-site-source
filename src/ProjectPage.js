import React, { Component } from 'react'

import Menu from './Menu'

import './css/project-page.css'
import './css/animations.css'

export default class ProjectPage extends Component {
	constructor() {
		super()
		this.state = {
			menuColor: 'black'
			}
		this.onResize = this.onResize.bind(this)
		}
	onResize() {
		if (window.innerWidth > 740) {
			this.setState({menuColor: 'white'})
			} else {
			this.setState({menuColor: this.props.color})
			}
		}
	componentDidMount() {
		window.addEventListener("resize", this.onResize);
		this.onResize()
		}
	render() {
		const {
			projectName = 'Missing Project Name'
			,projectDescription = 'Missing Project Description'
			,techDescription = 'Missing Tech Description'
			,desktopImage = 'Missing Image'
			,link = 'http://mattotousa.com'
			,color = '#4286f4'
			} = this.props
		const bgStyle = {
			background: color
			,borderColor: color
			}
		const triangleDown = [
			'triangle-down'
			,'anim-bounce'
			,'anim-dur-1s'
			,'anim-ease-out'
			,'anim-repeat'
			].join(' ')
		const triangleUp = [
			'triangle-up'
			,'anim-bounce'
			,'anim-dur-1s'
			,'anim-ease-out'
			,'anim-repeat'
			].join(' ')
		// let menuColor = color;
		// if (window.innerWidth > 740) {
		// 	menuColor = 'white';
		// }


		return (
			<div>
				<div className='project-page-bg' style={bgStyle}></div>
				<div className='project-page-container'>
					<h2
						className='project-page-header'
						style={{
							background: color
							,borderColor: color
							}}
					>
						{projectName}
					</h2>
					<div className='project-page-description'>
						<br/>
						{projectDescription}
						<br/>
						<br/>
						{techDescription}
						<br/>
						<a
							className='project-page-link'
							href={link}
							data-content='Visit Site'
							data-color={color}
							style={{color: color, borderColor: color}}
						>Visit Site</a>
					</div>
					<div className='project-page-img-container'>
						<div className='project-page-img-vert-align-helper'></div>
						<img
							src={desktopImage}
							alt={'A screenshot of ' + projectName}
							style={{borderColor: color}}
						/>
					</div>
				</div>

				<div className='top-center-parent'
					onClick={this.props.prevPage}
				>
					<div
						className={triangleUp} 
						style={{borderBottomColor: color}}
					></div>
				</div>

				<div className='bottom-center-parent'
						onClick={this.props.nextPage}
				>
					<div
						className={triangleDown}
					></div>
				</div>

					<Menu color={this.state.menuColor} onClick={this.props.onMenuClick}/>

			</div>
		)
	}
}
