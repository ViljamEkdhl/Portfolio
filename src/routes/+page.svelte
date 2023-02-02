<script>
    import Card from '../components/Card.svelte';
    import gitHub from '../assets/gitHub.svg'
</script>

<h1>William Lars Ekdahl</h1>


<section class="cards">
    <Card>
        <div class="content">
            <div>
                <h2>Sbotify</h2>
                <p>A discord bot which is inspired by the "wrapped" feature from spotify</p>
                <span class="test">
                    <a href="https://github.com/ViljamEkdhl/Sbotify"><img src={gitHub} alt="GitHub"/></a>
                    <a href="/woe-password">Read More!</a>
                </span>
            </div>
        </div>
    </Card>
    <Card>
        <div class="content">
            <div>
                <h2>Password Generator</h2>
                <p>A password generator that gives you a password from given parameters</p>
                <a href="https://github.com/EdvinAldi/WoE-Password"><img src={gitHub} alt="GitHub"/></a>
                <a href="/sbotify">Read More!</a>
            </div>
        </div>
    </Card>
    <Card>
        <div class="content">
            <div>
                <h2>Ludum-Dare-51</h2>
                <p>A small crypto-price guessing game</p>
                <a href="https://github.com/ViljamEkdhl/Ludum-Dare-51"><img src={gitHub} alt="GitHub"/></a>
                <a href="/ludum-dare-51">Read More!</a>
            </div>
        </div>
    </Card>
    
</section>


<style>
    h1 {
        display: flex;
        justify-content: center;
        color: black;
        font-size: 6rem;
        top: 50%;
        left: 15%;
        font-family: 'Poppins', sans-serif;
        
    }

    h2 {
        display: flex;
        justify-content: center;
        margin: 0px;
    }

    .cards {
        background-color: black;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
        border-radius: 20px;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        margin: 20px;
        padding: 20px;
    }

    .test {
        display: flex;
        font-size: large;
    }
</style>