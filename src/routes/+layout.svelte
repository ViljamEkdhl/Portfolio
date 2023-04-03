<script>
    import TopBar from '../components/TopBar.svelte';
    import './app.css';
</script>


<TopBar/>


<slot></slot>

<style>
    :global(body){
        background-color: white;
    }
</style>