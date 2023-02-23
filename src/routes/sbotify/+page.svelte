<script>
    import sbotifyProfile from "../../assets/sbotifyProfile.svg"
    import examplePrint from "../../assets/examplePrint.svg"
</script>

<div>
 <h1>Sbotify</h1>

 <p>
    A discord bot that is inspired by the Spotify wrapped feature.
    Every year Spotify publishes a visualisation on your top songs and genres for that year.
    The bot creates a top 10 list out of the most popular songs in a discord server and prints it out every month.
 </p>

</div>

<section>
    <h2>Exempel på output</h2>
    <img src={examplePrint} alt="Example sbotify print">
</section>

<style>
    section{
        margin-bottom: 20px;
        border-style: none;
        border-radius: 0px 40px 40px 0px;
        height: 25rem;
    }

    p{
        font-family: 'Poppins', sans-serif;
        display: flex;
        justify-content: center;
    }
</style>