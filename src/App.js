import React, { Component } from 'react';
import { Scroller, Section } from 'react-fully-scrolled'

import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import MenuDrawer from './MenuDrawer'
import AboutMe from './AboutMe'

class App extends Component {
	constructor() {
		super()
		this.state = {
			showMenu: false 
			,currentPage: 1
		}

		document.ontouchmove = function(ev) {
			ev.preventDefault();
		}

		this.menuToggle = this.menuToggle.bind(this)
		this.scrollTo = this.scrollTo.bind(this)
		this.updateCurrentPage = this.updateCurrentPage.bind(this)
		this.nextPage = this.nextPage.bind(this)
		this.prevPage = this.prevPage.bind(this)
	}
	menuToggle(e) {
		this.setState({
			showMenu: !this.state.showMenu
		})
	}
	scrollTo(page) {
		this.setState({
			showMenu: false
		}, window.fpTurnTo(page))
	}
	nextPage() {
		let page = this.state.currentPage
		window.fpTurnTo(page+1)
	}
	prevPage() {
		let page = this.state.currentPage
		window.fpTurnTo(page-1)
	}
	updateCurrentPage(page) {
		this.setState({
			currentPage: page
		})
	}
  render() {
		const alyssaColor = '#b85450'
		const alyssaHL = {color: alyssaColor}
		const labColor = '#0ba050'
		const labHL = {color: labColor}
		const cpColor = '#0ebeff'
		const cpHL = {color: '#0d95c6'}
		// const cpColor = '#cfb336'
		// const cpHL = {color: '#cfb336'}

		const {
			showMenu
			,currentPage
		} = this.state

    return (
			<div>
				<MenuDrawer
					onMenuClick={this.menuToggle}
					visible={showMenu}
				>
					<div
						onClick={() => this.scrollTo(1)}
					>Home</div>
					<div className='spacer'></div>
					<div
						onClick={() => this.scrollTo(2)}
					>Artist Portfolio</div>
					<div
						onClick={() => this.scrollTo(3)}
					>College Lab Site</div>
					<div className='spacer'></div>
					<div
						onClick={() => this.scrollTo(4)}
					>CodePen Projects</div>
					<div className='spacer'></div>
					<div
						onClick={() => this.scrollTo(5)}
					>About</div>
					<div>Résumé</div>
				</MenuDrawer>
			<Scroller
				onAfterScroll={this.updateCurrentPage}
				isEnabled={!showMenu}
			>
				<Section>
					<HomePage
						onMenuClick={this.menuToggle}
						nextPage={this.nextPage}
					/>
				</Section>
				<Section>
					<ProjectPage
						onMenuClick={this.menuToggle}
						projectName="Artist Portfolio"
						projectDescription={
							<p>
							Alyssa Garcia is a Seattle-based artist specializing in 
							ceramics, drawing, and painting.
							</p>
						}
						techDescription={
							<p>
								Utilizing <span style={alyssaHL}>React </span>
								with <span style={alyssaHL}>React-Router </span>
								 and <span style={alyssaHL}>React-Fully-Scrolled </span>
								 this <span style={alyssaHL}>responsive </span>
								 portfolio website was built with
								 <span style={alyssaHL}> WebPack </span> and includes 
								<span style={alyssaHL}> dynamic image galleries </span>
								which load content via the <span style={alyssaHL}>fetch API </span>
								from a headless <span style={alyssaHL}>Drupal </span>
								installation, all hosted from a <span style={alyssaHL}>LAMP</span> stack
								built on a <span style={alyssaHL}>DigitalOcean Droplet</span>.
							</p>
						}
						link={'https://www.alyssagarcia.art'}
						desktopImage={'./images/alyssa-site.png'}
						color={alyssaColor}
						nextPage={this.nextPage}
						prevPage={this.prevPage}
					/>
				</Section>
				<Section>
					<ProjectPage
						onMenuClick={this.menuToggle}
						projectName="Lab Website"
						projectDescription={
							<p>
								The O'Tousa Lab at Notre Dame studies "a wide range of molecular,
								biochemical, and cellular methods to analyze genes responsible for
								normal visual function." The site's primary purpose is to attract
								grad students.
							</p>
						}
						techDescription={
							<p>
								Notre Dame's faculty hosting services are somewhat limited,
								so a simple <span style={labHL}>responsive </span>
								static site was agreed on. No frameworks or external
								libraries were used, except to integrate
								<span style={labHL}> Google Analytics</span>.
							</p>
						}
						desktopImage={'./images/otousa-lab-site.png'}
						color={labColor}
						nextPage={this.nextPage}
						prevPage={this.prevPage}
					/>
				</Section>
				<Section>
					<ProjectPage
						onMenuClick={this.menuToggle}
						projectName="CodePen Projects"
						projectDescription={
							<p>
								Mostly projects for the <span style={cpHL}>FreeCodeCamp </span>
								curriculum, this is a collection of many projects done on CodePen
								including a <span style={cpHL}>random dungeon generator</span>,
								<span style={cpHL}> Conway's Game of Life</span>,
								a game of <span style={cpHL}>SIMON</span>, several <span style={cpHL}>
								data-visualizations</span>, and some projects showcasing simple
								<span style={cpHL}> RESTful API requests</span>.
							</p>
						}
						techDescription={
							<p>
								Various projects here utilize <span style={cpHL}>React</span>,
								<span style={cpHL}> D3</span>, <span style={cpHL}>Bootstrap</span>,
								the <span style={cpHL}>Canvas API</span>
								, and the <span style={cpHL}>Web Audio API</span>. 
								I think there's even some <span style={cpHL}>jQuery</span> in there.
							</p>
						}
						desktopImage={'./images/codepen-projects.png'}
						color={cpColor}
						nextPage={this.nextPage}
						prevPage={this.prevPage}
					/>
				</Section>
				<Section>
					<AboutMe
						onMenuClick={this.menuToggle}
						prevPage={this.prevPage}
					/>
				</Section>
			</Scroller>
		</div>
    );
  }
}

export default App;
