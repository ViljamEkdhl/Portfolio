<script>
    import lower from "../assets/lower.webp"
    import upper from "../assets/upper.webp"

    let y;
    let opacity = 1;

    $: opacity = y > 150 ? 0 : 1;
</script>

<svelte:window bind:scrollY={y}/>

<div class="content">

    <div class="upper" style="transform: translate(0,{-y * 20 / (10- 1)}px)">
        <img src={upper} alt="">
    </div>
    <h1 style={`opacity: ${opacity};`}>William Lars Ekdahl</h1>
    <div class="lower" style="transform: translate(0,{-y * 11 / (10- 1)}px)">
        <img src={lower} alt="">
    </div>

</div>



<style>
    img{
        width: 100%;
        height: 100%;
    }
    .lower{
        z-index: -1;
        width: 100%;
    }

    .upper{
        position: fixed;
        width: 100%;
        z-index: -4;
    }

    h1 {
        display: flex;
        justify-content: center;
        color: black;
        font-size: 6rem;
        font-family: 'Poppins', sans-serif;
        position: fixed;
        top: 50%;
        left: 5%;
        z-index: -2;
        margin: auto;
        background: -webkit-linear-gradient( #434343 0%, black 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>