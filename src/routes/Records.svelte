<script>
  import Record from "../lib/data-displays/Record.svelte";
  import RiQuestion from "../lib/icons/RI-Question.svelte";
  import { currentAccounts, recordsDateSorted } from "../store/appdata";
  import { getDateOfFormattedDateID } from "../utils/date";
</script>

<section class="records">
  <div class="records-history">
    <h1>Records</h1>
    <div class="records-list">
      {#each $recordsDateSorted as group}
        <div class="record-group">
          <div class="date">{getDateOfFormattedDateID(group[0])}</div>
          <div class="record-list">
            {#each group[1] as record}
              <Record {...record} />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="information-panel">
    <div class="accounts-tracker">
      <h1>Account</h1>
      {#each $currentAccounts as account}
        <div class={`account ${account.name}`}>
          <div class="icon">
            <RiQuestion />
          </div>
          <div class="details">
            <div class="account-name">{account.name}</div>
            <div class="amount">{account.amount}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .records {
    width: 70%;
  }

  .record-list {
    margin-top: var(--whiteSpace);
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }

  .information-panel {
    position: fixed;
    top: 0;
    right: 0;
    padding: var(--sectionPadding);
    display: flex;
    flex-direction: column;
    background: hsl(270, 45%, 5%);
    width: 20%;
    height: 100dvh;
  }

  .accounts-tracker {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }

  .account {
    display: flex;
    align-items: center;
    gap: var(--itemGap1);
  }

  .icon {
    width: 32px;
    height: 32px;
  }
</style>
