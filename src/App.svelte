<script>
  import Foot from "./main/Foot.svelte";
  import Head from "./main/Head.svelte";
  // import SonucSekmeler from "./hasta-sonuc/SonucSekmeler.svelte";
  import Login from "./main/Login.svelte"; 
</script>

<Head />

<main class="flex-shrink-0">
  <div class="container">
    <Login />    
    <!-- <SonucSekmeler /> -->
  </div>  
</main>

<Foot />

<style>
  :global(body) {
    padding-top: 65px;
  }
   /* :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  } */
</style>
