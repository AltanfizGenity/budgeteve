<script>
  import Record from "../lib/data-displays/Record.svelte";
  import { currentRecords } from "../store/appdata";
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
  <div class="records-panels"></div>
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
