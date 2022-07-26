import { SvgIcon } from "@mui/material";
import {ReactComponent as Logo} from "../images/github.svg"
import {ReactComponent as LinkedIn} from "../images/linked.svg"
import {IconButton} from "@mui/material"
import Stack from '@mui/material/Stack';

function GithubSvg() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return ( 
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="github" size="large" onClick={() => openInNewTab("https://github.com/ViljamEkdhl")}>
                <Logo/>
            </IconButton>

            <IconButton aria-label="github" size="large" onClick={() => openInNewTab("https://www.linkedin.com/in/william-ekdahl-9110b622b/")}>
                <LinkedIn/>
            </IconButton>
        </Stack>
     );
}

export default GithubSvg;