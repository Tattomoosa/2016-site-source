import React, { Component } from 'react'

import Menu from './Menu'
import './css/header.css'

export default class Header extends Component {
	render() {
		const headerStyle = [
			'header'
			,'anim-fade-in'
			,'anim-dur-0s5'
		].join(' ')
		return (
			<div className={headerStyle}>
				<span className='float-right header-margin-left'>
					<Menu color='black' onClick={this.props.onMenuClick} animate={'stretch-left'}/>
				</span>
				<span className='float-right menu-spacer'></span>
				<span className='float-right header-margin'>
					<a href='/resume'>
						Résumé
					</a>
				</span>
				<span
					onClick='this.props.onAboutClick'
					className='float-right header-margin'>
					About
				</span>
			</div>
			)
		}
}
