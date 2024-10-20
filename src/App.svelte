<script>
  import WalletForm from "./lib/forms/WalletForm.svelte";
  import TransactionForm from "./lib/forms/TransactionForm.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import WalletPage from "./routes/WalletPage.svelte";
  import TransactionPage from "./routes/TransactionPage.svelte";
  import { currentRoute } from "./store/appstate";
</script>

<Navbar />
<main>
  {#if $currentRoute === "home"}
    <h1>home</h1>
  {:else if $currentRoute === "transaction-page"}
    <TransactionPage />
  {:else if $currentRoute === "wallet-page"}
    <WalletPage />
    <WalletForm />
  {/if}
  <TransactionForm />
</main>
