import { Card } from "@mui/material";

function ProjectCard(props) {
    return ( 
        <Card 
        style={{
            width: "fit-content",
            height: "fit-content",
            padding: "20px 20px 40px 20px",
        }}
        >
            <h2>PROJECT NAME</h2>

            <h3>**image**</h3>

            <p>Links</p>
        </Card>
     );
}

export default ProjectCard;