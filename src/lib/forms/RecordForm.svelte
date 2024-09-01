<script>
  import { createRecordData } from "../../data/dataLab";
  import { currentRecords } from "../../store/appdata";
  import { isRecordFormOpen } from "../../store/appstate";
  import Modal from "../overlays/Modal.svelte";
  import InputAccount from "./record-form/InputAccount.svelte";
  import InputAmount from "./record-form/InputAmount.svelte";
  import InputCategory from "./record-form/InputCategory.svelte";
  import InputDate from "./record-form/InputDate.svelte";
  import InputNote from "./record-form/InputNote.svelte";
  import InputType from "./record-form/InputType.svelte";

  function addRecord(event) {
    let formData = new FormData(event.target);

    // REFACTOR: need use dynamic approach instead repeat to get data
    let newRecord = createRecordData(
      formData.get("type"),
      formData.get("category"),
      formData.get("account"),
      formData.get("date"),
      formData.get("amount"),
      formData.get("note")
    );
    currentRecords.update((val) => [...val, newRecord]);
    closeForm();
  }

  function closeForm() {
    $isRecordFormOpen = false;
  }
</script>

<Modal open={$isRecordFormOpen} on:close={closeForm} title="new record">
  <form class="record-form" on:submit|preventDefault={addRecord}>
    <InputType />
    <InputCategory />
    <InputAccount />
    <InputAmount />
    <InputDate />
    <InputNote />
    <button class="submit-btn">add record</button>
  </form>
</Modal>

<style>
  .record-form {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }

  .submit-btn {
    padding: 0.5rem 1rem;
    margin-top: var(--gutter);
    background-color: var(--primaryColor);
  }
</style>
