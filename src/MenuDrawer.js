import React from 'react'

import Menu from './Menu'

import './css/menu-drawer.css'

export default class MenuDrawer extends React.Component {
	render() {
		let growingCircle = [
			'menu-circle'
		].join(' ')
		let visible = 'invisible'
		if (this.props.visible) {
			growingCircle += ' big'
			visible = 'visible'
		}
		return (
			<div className={'menu-container ' + visible}>
				<div className={growingCircle}>
					<div className='menu-anchor'>
						<div className={'menu-options'}>
							{this.props.children}
						</div>
					</div>
				</div>
				<Menu color='black' onClick={this.props.onMenuClick} animate={false}/>

			</div>
			)
	}
}
