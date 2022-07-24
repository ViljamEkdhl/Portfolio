import React from "react";
import TopBar from "./components/TopBar";
import background from "./images/background.jpg";
import {Parallax, ParallaxLayer } from "@react-spring/parallax"
import ProjectCard from "./components/ProjectCard";

function App() {
	return (

		<div className="App">

		<Parallax pages={2}>
		<ParallaxLayer 
			offset={0}
			speed={2.5}
			factor={1}
			style=
			{{
				backgroundColor: "white",
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
			}}>

			<h1 className="main-title">SBOTIFY</h1>
		</ParallaxLayer>

		<ParallaxLayer offset={0} speed={2} sticky={{start: 1, end: 1.5}}>
			<TopBar/>
		</ParallaxLayer>

		<ParallaxLayer offset={1} speed={2} style={{ backgroundColor: "#22A377"}} />

		<ParallaxLayer
    	offset={1}
    	speed={2}
    	style={{
      		display: 'flex',
      		justifyContent: 'center',
      		alignItems: 'center',
      		color: 'white',
			backgroundColor: '#22A377',
    	}}>
    		<ProjectCard/>
  		</ParallaxLayer>
		</Parallax>

		</div>
	);
}


export default App;
