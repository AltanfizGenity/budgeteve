<script>
  import Navbar from "./lib/Navbar.svelte";
  import { currentRoute } from "./store/appstate";
</script>

<Navbar />
<main>
  {#if $currentRoute === "home"}
    <h1>home</h1>
  {/if}
</main>
