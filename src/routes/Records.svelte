<script>
  import Record from "../lib/data-displays/Record.svelte";
  import { currentRecords } from "../store/appdata";
</script>

<section class="records">
  <h1>Records</h1>
  <div class="record-history">
    {#each $currentRecords as record}
      <Record {...record} />
    {/each}
  </div>
</section>
