<script>
  import AccountForm from "./lib/forms/AccountForm.svelte";
  import RecordForm from "./lib/forms/RecordForm.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Account from "./routes/Account.svelte";
  import Records from "./routes/Records.svelte";
  import { currentRoute } from "./store/appstate";
</script>

<Navbar />
<main>
  <!-- TODO: Refactor this approach, use function / dynamic methods instead hard coded -->
  {#if $currentRoute === "home"}
    <h1>home</h1>
  {:else if $currentRoute === "records"}
    <Records />
    <!-- TODO: Move RecordForm to seperate element block or custom UI wrapper -->
  {:else if $currentRoute === "account"}
    <Account />
    <AccountForm />
  {/if}
  <RecordForm />
</main>
