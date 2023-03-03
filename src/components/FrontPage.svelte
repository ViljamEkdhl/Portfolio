<script>
    import lower from "../assets/lowerFinal.png"
    import upper from "../assets/upperFinal.png"

    let y;
</script>

<svelte:window bind:scrollY={y}/>


<div class="upper" style="transform: translate(0,{-y * 20 / (10- 1)}px)">
    <img src={upper} alt="">
</div>

<div class="lower" style="transform: translate(0,{-y * 11 / (10- 1)}px)">
    <img src={lower} alt="">
</div>


<h1>William Lars Ekdahl</h1>


<style>
    img{
        width: 100%;
        height: 100%;
    }
    .lower{
        z-index: -1;
    }

    .upper{
        position: fixed;
        z-index: -4;
    }

    h1 {
        display: flex;
        justify-content: center;
        color: black;
        font-size: 6rem;
        top: 50%;
        left: 5%;
        font-family: 'Poppins', sans-serif;
        position: absolute;
        z-index: -2;
    }
</style>