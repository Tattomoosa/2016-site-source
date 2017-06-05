import React, { Component } from 'react'

import './css/menu.css'

export default class Menu extends Component {
	render() {
		const menuButton = [
			'menu-button'
			// ,'anim-ease-out'
			// ,'anim-dur-0s5'
			// ,'anim-delay-3s'
		].join(' ')
		let menuButtonLine = [
			'menu-button-line'
			// ,'anim-ease-out'
			// ,'anim-dur-1s'
			// ,'anim-delay-3s'
		].join(' ')

		if (this.props.animate === 'stretch-left') {
			menuButtonLine += ' anim-stretch-left'
		}

		const menuButtonLine2 = menuButtonLine + ' anim-delay-0s25'
		const menuButtonLine3 = menuButtonLine + ' anim-delay-0s5'

		return (
			<div>
				<div
					className={menuButton}
					onClick={this.props.onClick}
				>
					<div className='whole-line'>
						<div
							className={menuButtonLine}
							style={{background: this.props.color || 'white'}}
						></div>
					</div>
					<div className='whole-line'>
						<div
							className={menuButtonLine2}
							style={{background: this.props.color || 'white'}}
						></div>
					</div>
					<div className='whole-line'>
						<div
							className={menuButtonLine3}
							style={{background: this.props.color || 'white'}}
						></div>
					</div>
				</div>
			</div>
			)
		}
}
