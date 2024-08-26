<script>
  import { createRecordData } from "../../data/dataLab";
  import { currentRecords } from "../../store/appdata";
  import InputGroup from "./InputGroup.svelte";

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
  <InputGroup name="type">
    <select bind:value={type} name="type" id="type">
      <option value="income">income</option>
      <option value="expense">expense</option>
    </select>
  </InputGroup>
  <InputGroup name="category">
    <select bind:value={category} name="category" id="category">
      <option value="salary">salary</option>
      <option value="rent">rent</option>
    </select>
  </InputGroup>
  <InputGroup name="account">
    <select bind:value={account} name="account" id="account">
      <option value="cash">cash</option>
      <option value="bank">bank</option>
    </select>
  </InputGroup>
  <InputGroup name="date">
    <input type="date" bind:value={date} name="date" id="date" />
  </InputGroup>
  <InputGroup name="amount">
    <input type="number" bind:value={amount} name="amount" placeholder="0" id="amount" />
  </InputGroup>
  <InputGroup name="note">
    <textarea bind:value={note} name="note" id="note"></textarea>
  </InputGroup>
  <button>add record</button>
</form>
