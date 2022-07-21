import { Button, TextField } from "@mui/material";

function App() {
	return (
		<div className="App">
			<header className="App-header">

				<div>
					<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				</div>

				<div>
					<Button variant="contained">Contained</Button>
				</div>
			</header>
		</div>
	);
}

export default App;
