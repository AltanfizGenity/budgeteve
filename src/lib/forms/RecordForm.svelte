<script>
  import { createRecordData } from "../../data/dataLab";
  import { currentRecords } from "../../store/appdata";

  let type = "income";
  let category = null;
  let account = "cash";
  let date = null;
  let amount = null;
  let note = "";

  function addRecord(event) {
    let formData = new FormData(event.target);

    let newRecord = createRecordData(
      formData.get("type"),
      formData.get("category"),
      formData.get("account"),
      formData.get("date"),
      formData.get("amount"),
      formData.get("note")
    );

    currentRecords.update((val) => [...val, newRecord]);
  }
</script>

<form class="record-form" on:submit|preventDefault={addRecord}>
  <div class="input-group">
    <label for="">Type</label>
    <select bind:value={type} name="type">
      <option value="income">income</option>
      <option value="expense">expense</option>
    </select>
  </div>
  <div class="input-group">
    <label for="">Category</label>
    <select bind:value={category} name="category">
      <option value="salary">salary</option>
      <option value="rent">rent</option>
    </select>
  </div>
  <div class="input-group">
    <label for="">Account</label>
    <select bind:value={account} name="account">
      <option value="cash">cash</option>
      <option value="bank">bank</option>
    </select>
  </div>
  <div class="input-group">
    <label for="">Date</label>
    <input type="date" bind:value={date} name="date" />
  </div>
  <div class="input-group">
    <label for="">Amount</label>
    <input type="number" bind:value={amount} name="amount" placeholder="0" />
  </div>
  <div class="input-group">
    <label for="">Note</label>
    <textarea bind:value={note} name="note"></textarea>
  </div>
  <button>add record</button>
</form>
