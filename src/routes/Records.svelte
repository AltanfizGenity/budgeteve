<script>
  import { currentRecords } from "../store/appdata";
</script>

<section class="records">
  <h1>Records</h1>
  <div class="record-history">
    {#each $currentRecords as record}
      <div>id: {record.id}</div>
    {/each}
  </div>
</section>
