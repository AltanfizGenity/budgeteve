<script>
  import AccountForm from "./lib/forms/AccountForm.svelte";
  import TransactionForm from "./lib/forms/TransactionForm.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Account from "./routes/Account.svelte";
  import TransactionPage from "./routes/TransactionPage.svelte";
  import { currentRoute } from "./store/appstate";
</script>

<Navbar />
<main>
  {#if $currentRoute === "home"}
    <h1>home</h1>
  {:else if $currentRoute === "transaction-history"}
    <TransactionPage />
  {:else if $currentRoute === "account"}
    <Account />
    <AccountForm />
  {/if}
  <TransactionForm />
</main>
