<script>
    import Card from '../components/Card.svelte';
    import gitHub from '../assets/gitHub.svg'
    import FrontPage from '../components/FrontPage.svelte';
</script>

<FrontPage/>

<section class="cards">
    <Card>
        <div class="content">
            <div class="text">
                <h2>Sbotify</h2>
            </div>
        </div>
        <span class="mini-nav">
            <a href="https://github.com/ViljamEkdhl/Sbotify"><img src={gitHub} alt="GitHub"/></a>
            <!-- a href="/sbotify">Read More!</a> Ta bort kommentaren om en individuell sida med info om sbotify önskas -->
        </span>
    </Card>
    <Card>
        <div class="content">
            <div class="text">
                <h2>Password Generator</h2>
            </div>
        </div>
        <span class="mini-nav">
            <a href="https://github.com/EdvinAldi/WoE-Password"><img src={gitHub} alt="GitHub"/></a>
            <button class="read-more" href="/woe-password">Demo</button>
        </span>
    </Card>
    <Card>
        <div class="content">
            <div class="text">
                <h2>Ludum-Dare-51</h2>
            </div>
        </div>
        <span class="mini-nav">
            <a href="https://github.com/ViljamEkdhl/Ludum-Dare-51"><img src={gitHub} alt="GitHub"/></a>
            <!--<a class="read-more" href="/ludum-dare-51">Read More!</a>-->
        </span>
    </Card> 
</section>


<style>
    h2 {
        display: flex;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        color: black;
        font-size: large;
        margin: 0px;
        margin-bottom: 20px;
    }

    button {
                 
        background-image: linear-gradient(to right, #50C9C3 0%, #96DEDA  51%, #50C9C3  100%);
        text-align: center;
        text-transform: uppercase;
        margin-left: 10px;
        transition: 0.5s;
        background-size: 200% auto;
        color: black;            
        box-shadow: 0 0 20px #eee;
        border-radius: 10px;
        display: block;
        border-style: hidden;
    }
    button:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
    
    .read-more{
        text-decoration: none;
        padding-top: 5px;
    }
    
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
        margin-bottom: 400px;
        border-radius: 20px;
        width: fit-content;
        max-width: 1200px;
        background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        flex: 1;
        margin: 20px;
        padding: 20px;
    }

    .mini-nav {
        display: flex;
        margin-left: 10px;
        margin-bottom: 10px;
    }

    .text {
        width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
    }

</style>