<script>
  import { recordDataProto } from "../data/dataLab";
</script>

<section class="records">
  <h1>Records</h1>
  <div class="record-history">
    {#each recordDataProto as record}
      <div class="record">
        <div>record id: {record.id}</div>
        <div>type: {record.type}</div>
        <div>date: {record.date}</div>
        <div>amount: {record.amount}</div>
      </div>
    {/each}
  </div>
</section>
