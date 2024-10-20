<script>
  import { wallets } from "../store/appdata";
  import { isWalletFormOpen } from "../store/appstate";

  function openForm() {
    $isWalletFormOpen = true;
  }
</script>

<section class="wallet-page">
  <h2>My wallets</h2>
  <ul class="wallet-list">
    {#each $wallets as { name, amount }}
      <li>
        <div class="wallet">
          <p class="wallet-name">{name}</p>
          <p class="wallet-amount">{amount}</p>
        </div>
      </li>
    {/each}
  </ul>
  <button class="btn primary new-wallet-btn" on:click={openForm}>create wallet</button>
</section>

<style>
  .wallet-page {
    display: flex;
    width: 40%;
    flex-direction: column;
    gap: var(--itemGap2);
  }

  .wallet-list {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }

  .wallet {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .new-wallet-btn {
    padding: 0.5rem 0.8rem;
    width: 200px;
    background-color: var(--primaryColor);
  }
</style>
