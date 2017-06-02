import React, { Component } from 'react'

import Menu from './Menu'
import './css/header.css'

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<span className='title'>Matt O'Tousa</span>
				<span>
					<Menu />
				</span>
			</div>
			)
		}
}
