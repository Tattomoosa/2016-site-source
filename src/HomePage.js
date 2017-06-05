import React from 'react'

import Header from './Header'

import './css/homepage.css'
import './css/animations.css'

export default class HomePage extends React.Component {
	render() {
		
		const blackQuoteClass = [
			'quote'
			,'noselect'
			,'black-text'
			,'anim-fade-down'
			,'anim-dur-1s'
			,'anim-ease-out'
		].join(' ')

		const whiteQuoteClass = [
			'quote'
			,'noselect'
			,'white-text'
			,'anim-fade-up'
			,'anim-dur-1s'
			,'anim-delay-1s'
			,'anim-ease-out'
		].join(' ')

		const iAmClassText = [
			'white-text'
			,'noselect'
			,'anim-fade-up'
			,'anim-dur-1s'
			,'anim-ease-out'
		].join(' ')

		const triangle = [
			'triangle-down'
			,'anim-fade-in'
			,'anim-bounce'
			,'anim-dur-1s'
			,'anim-delay-4s'
			,'anim-repeat'
		].join(' ')

		return (
			<div className='fullpage blue-bg'>
				<Header
					onMenuClick={this.props.onMenuClick}
					onAboutClick={this.props.onAboutClick}
				/>
				<div className='quote-container'>
					<h1 className={blackQuoteClass}>
						As simple as possible,
					</h1>
					<h1 className={whiteQuoteClass}>
						But no simpler
					</h1>
				</div>
				<div className='bottom-center-parent'>
					<h2 className={iAmClassText + ' anim-delay-2s'}>
						<span className='black-text'>
							{'I am a '}
						</span>
						web developer
						<span className='black-text'>
							{' & '}
						</span>
						designer
					</h2> 
					<h2 className={iAmClassText + ' anim-delay-3s'}>
						<span className='black-text'>
							{'creating '}
						</span>
						seamless experiences
					</h2> 
					<br/>
					<br/>
					<div className='anim-fade-in anim-dur-1s anim-delay-4s bottom-center-parent'
						onClick={this.props.nextPage}
					>
						<div
							className={triangle}
						></div>
					</div>
				</div>
			</div>
		)
	}
}
