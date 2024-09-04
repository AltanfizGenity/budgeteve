<script>
  import Record from "../lib/data-displays/Record.svelte";
  import { currentAccounts, currentRecords } from "../store/appdata";
</script>

<section class="records">
  <div class="records-history">
    <h1>Records</h1>
    <div class="record-list">
      {#each $currentRecords as record}
        <Record {...record} />
      {/each}
    </div>
  </div>
  <div class="records-panels">
    <div class="accounts-tracker">
      {#each $currentAccounts as account}
        <div class={`account ${account.name}`}>
          <div class="account-name">{account.name}</div>
          <div class="amount">{account.amount}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .records {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .record-list {
    margin-top: var(--whiteSpace);
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }
</style>
