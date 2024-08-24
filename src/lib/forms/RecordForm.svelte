<script>
  import { createRecordData } from "../../data/dataLab";
  import { currentRecords } from "../../store/appdata";

  let type = "income";
  let category = null;
  let account = "cash";
  let date = null;
  let amount = 0;
  let note = "";

  function addRecord() {
    let formData = [type, category, account, date, amount, note];
    let newRecord = createRecordData(...formData);
    currentRecords.update((val) => [...val, newRecord]);
  }
</script>

<form class="record-form" on:submit|preventDefault={addRecord}>
  <div class="input-group">
    <label for="">Type</label>
    <select bind:value={type}>
      <option value="income">income</option>
      <option value="expense">expense</option>
    </select>
  </div>
  <div class="input-group">
    <label for="">Category</label>
    <select bind:value={category}>
      <option value="salary">salary</option>
      <option value="rent">rent</option>
    </select>
  </div>
  <div class="input-group">
    <label for="">Account</label>
    <select bind:value={account}>
      <option value="cash">cash</option>
      <option value="bank">bank</option>
    </select>
  </div>
  <div class="input-group">
    <label for="">Date</label>
    <input type="date" bind:value={date} />
  </div>
  <div class="input-group">
    <label for="">Amount</label>
    <input type="number" bind:value={amount} />
  </div>
  <div class="input-group">
    <label for="">Note</label>
    <textarea bind:value={note}></textarea>
  </div>
  <button>add record</button>
</form>
