import React from "react";
import TopBar from "./components/TopBar";
import background from "./images/background.jpg";
import {Parallax, ParallaxLayer } from "@react-spring/parallax"
import ProjectCard from "./components/ProjectCard";
import {IconButton} from "@mui/material"

function App() {
	
	return (

		<Parallax pages={3}>

			<ParallaxLayer 
				speed={2.5}
				factor={1}
				style={{
					backgroundColor: "white",
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
				}}>
				
				<ParallaxLayer className="top-bar">
					<TopBar/>
				</ParallaxLayer>

				<h1 className="main-title">SBOTIFY</h1>
				
			</ParallaxLayer>


			<ParallaxLayer
			offset={1}
			speed={0.5}
			style={{
				display: 'inline-flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				backgroundColor: '#22A377',
			}}>

				<ProjectCard 
				name="Sbotify" 
				image={require("./images/sbotify.png")}
				link="https://github.com/ViljamEkdhl/Sbotify"
				/>
				<ProjectCard 
				name="WoE Password" 
				image={require("./images/woe.png")}
				link="https://github.com/EdvinAldi/WoE-Password"
				/>
								<ProjectCard 
				name="WoE Password" 
				image={require("./images/woe.png")}
				link="https://github.com/EdvinAldi/WoE-Password"
				/>
				
				<ProjectCard 
				name="WoE Password" 
				image={require("./images/woe.png")}
				link="https://github.com/EdvinAldi/WoE-Password"
				/>
				
			</ParallaxLayer>

			<ParallaxLayer
			offset={2}
			speed={0.5}
			style={{
				display: 'inline-flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				backgroundColor: '#F0F8FF',
			}}>

				<ProjectCard 
				name="Sbotify" 
				image={require("./images/sbotify.png")}
				link="https://github.com/ViljamEkdhl/Sbotify"
				/>
				<ProjectCard 
				name="WoE Password" 
				image={require("./images/woe.png")}
				link="https://github.com/EdvinAldi/WoE-Password"
				/>
								<ProjectCard 
				name="WoE Password" 
				image={require("./images/woe.png")}
				link="https://github.com/EdvinAldi/WoE-Password"
				/>
				
				<ProjectCard 
				name="WoE Password" 
				image={require("./images/woe.png")}
				link="https://github.com/EdvinAldi/WoE-Password"
				/>
			</ParallaxLayer>

		</Parallax>
	);
}


export default App;
