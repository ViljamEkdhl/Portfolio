import React from "react";
import TopBar from "./components/TopBar";
import background from "./images/background.jpg";
import {Parallax, ParallaxLayer } from "@react-spring/parallax"
import ProjectCard from "./components/ProjectCard";
import {IconButton} from "@mui/material"

function App() {
	
	return (

		<Parallax pages={2}
		style={{				
			position: 'absolute',
			zIndex: '0',
		}}>

			<ParallaxLayer 
				speed={2.5}
				factor={1}
				style={{
					position: 'absolute',
					zIndex: '1',
					backgroundColor: "white",
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
				}}>
				<h1 className="main-title">SBOTIFY</h1>
				
				<ParallaxLayer offset={0} speed={2} sticky={{start: 0, end: 2}}>
				<TopBar/>
				</ParallaxLayer>

			</ParallaxLayer>


			<ParallaxLayer
			offset={1}
			speed={0.5}
			style={{
				position: 'absolute',
				zIndex: '1',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				backgroundColor: '#22A377',
			}}>

				<ProjectCard/>
			</ParallaxLayer>

		</Parallax>
	);
}


export default App;
