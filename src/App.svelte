<script>
  import RecordForm from "./lib/forms/RecordForm.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Records from "./routes/Records.svelte";
  import { currentRoute } from "./store/appstate";
</script>

<Navbar />
<main>
  {#if $currentRoute === "home"}
    <h1>home</h1>
  {:else if $currentRoute === "records"}
    <Records />
    <RecordForm />
  {/if}
</main>
