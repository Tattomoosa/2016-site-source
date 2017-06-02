import React, { Component } from 'react';
import { Scroller, Section } from 'react-fully-scrolled'

import HomePage from './HomePage'
import Header from './Header'
import ProjectPage from './ProjectPage'

class App extends Component {
  render() {
		const alyssaColor = '#b85450'
		const alyssaHL = {color: alyssaColor}
		const labColor = '#0ba050'
		const labHL = {color: labColor}
		const cpColor = '#897643'
		const cpHL = {color: cpColor}
    return (
			<div>
				{// <Header /> 
					}
			<Scroller
				isEnabled={true}
			>
				<Section>
					<HomePage />
				</Section>
				<Section>
					<ProjectPage
						projectName="Alyssa Garcia's Web Portfolio"
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
								built on a <span style={alyssaHL}>DigitalOcean Droplet</span>
							</p>
						}
						desktopImage={'./images/alyssa-site.png'}
						color={alyssaColor}
					/>
				</Section>
				<Section>
					<ProjectPage
						projectName="O'Tousa Lab Website"
						projectDescription={
							<p>
								The O'Tousa Lab at Notre Dame studies "a wide range of molecular,
								biochemical, and cellular methods to analyze genes responsible for
								normal visual function." The site's primary purpose is to attract
								grad students
							</p>
						}
						techDescription={
							<p>
								Notre Dame's faculty hosting services are somewhat limited,
								so a simple <span style={labHL}>responsive </span>
								static site was agreed on. No frameworks or external
								libraries were used, except to integrate
								<span style={labHL}> Google Analytics</span>
							</p>
						}
						desktopImage={'./images/otousa-lab-site.png'}
						color={labColor}
					/>
				</Section>
				<Section>
					<ProjectPage
						projectName="CodePen Projects"
						projectDescription={
							<p>
								Mostly done for the <span style={cpHL}>FreeCodeCamp </span>
								curriculum, this is a collection of many projects done on CodePen
								including a <span style={cpHL}>random dungeon generator</span>,
								a game of <span style={cpHL}>SIMON</span>, several <span style={cpHL}>
								data-visualizations</span>, and some projects showcasing simple
								<span style={cpHL}> external API requests.</span>
							</p>
						}
						techDescription={
							<p>
								Various projects here utilize <span style={cpHL}>React</span>,
								<span style={cpHL}> D3</span>, <span style={cpHL}>Bootstrap</span>,
								the <span style={cpHL}>Canvas API</span>
								, and the <span style={cpHL}>Web Audio API</span>. 
								I think there's even some <span style={cpHL}>jQuery</span> in there!
							</p>
						}
						desktopImage={'./images/otousa-lab-site.png'}
						color={cpColor}
					/>
				</Section>
			</Scroller>
		</div>
    );
  }
}

export default App;
