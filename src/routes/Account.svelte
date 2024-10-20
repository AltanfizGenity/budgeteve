<script>
  import { currentAccounts } from "../store/appdata";
  import { isAccountFormOpen } from "../store/appstate";

  function openForm() {
    $isAccountFormOpen = true;
  }
</script>

<section class="account-page">
  <h2>My account</h2>
  <ul class="account-list">
    {#each $currentAccounts as account}
      <li>
        <div class="account">
          <p class="account-name">{account.name}</p>
          <p class="account-amount">{account.amount}</p>
        </div>
      </li>
    {/each}
  </ul>
  <button class="btn primary new-account-btn" on:click={openForm}>new account</button>
</section>

<style>
  .account-page {
    display: flex;
    width: 40%;
    flex-direction: column;
    gap: var(--itemGap2);
  }

  .account-list {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }

  .account {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .new-account-btn {
    padding: 0.5rem 0.8rem;
    width: 200px;
    background-color: var(--primaryColor);
  }
</style>
