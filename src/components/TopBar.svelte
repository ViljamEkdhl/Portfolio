<script>
	import linkedIn from '../assets/linkedin.svg'
	import gitHub from '../assets/gitHub.svg'
	import home from '../assets/home.svg'

</script>

<div class="nav">
	<span>
		<a href="https://www.linkedin.com/in/william-ekdahl-9110b622b/" target="_blank" rel="noreferrer">
			<img src={linkedIn} alt="linkedIn"/>
		</a>
		<a href="https://github.com/ViljamEkdhl" target="_blank" rel="noreferrer">
			<img src={gitHub} alt="GitHub"/>
		</a>
		<a href="/">
			<img src={home} alt="Home">
		</a>
	</span>
</div>

<style>
	.nav{
		display: flex;
		justify-content: center;
	}

	a{
		font-family: 'Poppins', sans-serif;
		font-size: larger;
		text-decoration: none;
		color: black;
	}
</style>