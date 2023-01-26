<script>
	import linkedIn from '../assets/linkedin.svg'
	import gitHub from '../assets/gitHub.svg'

	const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

</script>

<div class="nav">
	<span>
		<a href="https://www.linkedin.com/in/william-ekdahl-9110b622b/" target="_blank" rel="noreferrer">
			<img src={linkedIn} alt="linkedIn Image"/>
		</a>
		<a href="https://github.com/ViljamEkdhl" target="_blank" rel="noreferrer">
			<img src={gitHub} alt="GitHub Image"/>
		</a>
	</span>
</div>

<style>
	.nav{
		display: flex
	}
</style>