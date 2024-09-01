<script>
  import Record from "../lib/data-displays/Record.svelte";
  import { currentRecords } from "../store/appdata";
</script>

<section class="records">
  <div class="records-view">
    <h1>Records</h1>
    <div class="record-history">
      {#each $currentRecords as record}
        <Record {...record} />
      {/each}
    </div>
  </div>
</section>

<style>
  .records-view {
    width: 70%;
  }
</style>
