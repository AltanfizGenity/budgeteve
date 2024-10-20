<script>
  import { currentAccounts } from "../store/appdata";
</script>

<section class="account-page">
  <h2>My account</h2>
  <ul>
    {#each $currentAccounts as account}
      <li>
        <div class="account">
          <p class="account-name">{account.name}</p>
          <p class="account-amount">{account.amount}</p>
        </div>
      </li>
    {/each}
  </ul>
  <button class="btn primary-btn">new account</button>
</section>

<style>
</style>
