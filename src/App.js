import React, { Component } from 'react';
import { Scroller, Section } from 'react-fully-scrolled'

import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import MenuDrawer from './MenuDrawer'
import AboutMe from './AboutMe'

import otousalabimg from './images/otousa-lab-site.png'
import alyssaimg from './images/alyssa-site.png'
import codepenimg from './images/codepen-projects.png'
import behanceimg from './images/aeode-logo.png'
import sttimg from './images/string-theory-tees.png'

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
		const sttColor = '#596883';
		const sttHL = { color : sttColor };
		const alyssaColor = '#b85450'
		const alyssaHL = {color: alyssaColor}
		const labColor = '#0ba050'
		const labHL = {color: labColor}
		const cpColor = '#0ebeff'
		const cpHL = {color: '#0d95c6'}
		const bhColor = '#8a5151'
		const bhHL = {color: '#8a5151'}
		// const cpColor = '#cfb336'
		// const cpHL = {color: '#cfb336'}

		const {
			showMenu
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
					>String Theory T-Shirt Co.</div>
					<div
						onClick={() => this.scrollTo(3)}
					>Alyssa Garcia Portfolio</div>
					<div
						onClick={() => this.scrollTo(4)}
					>O'Tousa Lab at Notre Dame</div>
					<div
						onClick={() => this.scrollTo(5)}
					>School Projects</div>
					<div className='spacer'></div>
					<div
						onClick={() => this.scrollTo(6)}
					>Graphic Design/Art</div>
					<div className='spacer'></div>
					<div
						onClick={() => this.scrollTo(7)}
					>About</div>
					<a href='/resume'>
						<div>
							Résumé
						</div>
					</a>

				</MenuDrawer>
			<Scroller
				onAfterScroll={this.updateCurrentPage}
				isEnabled={!showMenu}
			>
				<Section>
					<HomePage
						onMenuClick={this.menuToggle}
						onAboutClick={() => this.scrollTo(6)}
						nextPage={this.nextPage}
					/>
				</Section>
				<Section>
					<ProjectPage
						onMenuClick={this.menuToggle}
						projectName="String Theory T-Shirt Co."
						projectDescription={
							<p>
								String Theory T-Shirt Co. sells space shirts and other science-inspired apparel.
							</p>
						}
						techDescription={
							<p>
								Wordpress, LEMP Stack, WooCommerce, Stripe API
							</p>
						}
						link={'https://www.stringtheorytees.com'}
						desktopImage={sttimg}
						color={sttColor}
						nextPage={this.nextPage}
						prevPage={this.prevPage}
					/>
				</Section>
				<Section>
					<ProjectPage
						onMenuClick={this.menuToggle}
						projectName="Alyssa Garcia's Portfolio"
						projectDescription={
							<p>
							Alyssa Garcia is a Portland-based artist specializing in illustration and ceramics.
							</p>
						}
						techDescription={
							<p>
								React,
								WebPack,
								Drupal,
								on LAMP Stack.
							</p>
						}
						link={'https://www.alyssagarcia.art'}
						desktopImage={alyssaimg}
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
								The O'Tousa Lab at Notre Dame studies "molecular,
								biochemical, and cellular methods to analyze genes responsible for
								normal visual function." 
							</p>
						}
						techDescription={
							<p>
								HTML,
							  CSS,
								a little Javascript
							</p>
						}
						link={'http://www3.nd.edu/~jotousa/labwww/'}
						desktopImage={otousalabimg}
						color={labColor}
						nextPage={this.nextPage}
						prevPage={this.prevPage}
					/>
				</Section>
				<Section>
					<ProjectPage
						onMenuClick={this.menuToggle}
						projectName="School Projects"
						projectDescription={
							<p>
								Mostly <a href="www.freecodecamp.com" style={ cpHL }>FreeCodeCamp</a> projects:
								Random dungeon generator, Conway's Game of Life, Data Visualization, RESTful communication, etc.
							</p>
						}
						techDescription={
							<p>
								React,
								D3,
								Bootstrap,
							  RESTful API
								Canvas API,
							  Web Audio API,
								jQuery,
								among others...
							</p>
						}
						link={'http://www.codepen.io/tattomoosa'}
						desktopImage={codepenimg}
						color={cpColor}
						nextPage={this.nextPage}
						prevPage={this.prevPage}
					/>
				</Section>
				<Section>
					<ProjectPage
						onMenuClick={this.menuToggle}
						projectName="Graphic Design/Art"
						projectDescription={
							<p>
								In addition to web development and design, I also do graphic design,
								portraiture, and other sorts of art and illustration.
							</p>
						}
						techDescription={
							<p>
								To keep this site focused on my work as a web developer, all other
								art and design work is hosted off-site at <a
									href='http://www.behance.net/MattOTousa'
									style={bhHL}>Behance.net
								</a>.
							</p>
						}
						link={'http://www.behance.net/MattOTousa'}
						desktopImage={behanceimg}
						color={bhColor}
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
