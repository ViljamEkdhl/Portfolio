import { Card, Typography } from "@mui/material";
import NavBar from "./NavBar";

function ProjectCard(props) {
    return ( 
        <Card
        style={{
            width: "20%",
            height: "60%",
            padding: "20px 20px 40px 20px",
            margin: "20px 20px 40px 20px",
            alignContent: "center"
        }}
        >
            <Typography fontFamily="Poppins, sans-serif" variant="h4" align="center">{props.name}</Typography>

            <img style={{
                alignContent: "center",
                width: "100%"
            }} src={props.image} />

            <NavBar link={props.link}/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Card>
     );
}

export default ProjectCard;