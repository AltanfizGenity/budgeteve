<script>
  import Transaction from "../lib/data-displays/Transaction.svelte";
  import RiQuestion from "../lib/icons/RI-Question.svelte";
  import { wallets, transactionSortedDate } from "../store/appdata";
  import { getDateOfFormattedDateID } from "../utils/date";
</script>

<section class="transaction">
  <div class="transaction-history">
    <h1>Transaction history</h1>
    <div class="transactions-list">
      {#each $transactionSortedDate as [date, transactionList]}
        <div class="transaction-group">
          <div class="date">{getDateOfFormattedDateID(date)}</div>
          <div class="transaction-list">
            {#each transactionList.reverse() as transaction}
              <Transaction {...transaction} />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="information-panel">
    <div class="wallet-tracker">
      <h1>current wallet</h1>
      {#each $wallets as { name, amount }}
        <div class={`wallet ${name}`}>
          <div class="icon">
            <RiQuestion />
          </div>
          <div class="details">
            <div class="wallet-name">{name}</div>
            <div class="wallet-amount">{amount}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .transaction {
    width: 70%;
  }

  .transaction-history {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .transactions-list {
    margin-top: var(--whiteSpace);
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .transaction-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .date {
      color: #aaa;
    }
  }

  .transaction-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

  .wallet-tracker {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }

  .wallet {
    display: flex;
    align-items: center;
    gap: var(--itemGap1);
  }

  .icon {
    width: 32px;
    height: 32px;
  }
</style>
