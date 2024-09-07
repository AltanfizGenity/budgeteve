<script>
  import { createRecordData } from "../../data/dataLab";
  import { isRecordFormOpen } from "../../store/appstate";
  import { updateRecordData } from "../../utils/data";
  import Modal from "../overlays/Modal.svelte";
  import InputAccount from "./record-form/InputAccount.svelte";
  import InputAmount from "./record-form/InputAmount.svelte";
  import InputCategory from "./record-form/InputCategory.svelte";
  import InputDate from "./record-form/InputDate.svelte";
  import InputNote from "./record-form/InputNote.svelte";
  import InputType from "./record-form/InputType.svelte";
  import SubmitBtn from "./SubmitBtn.svelte";

  let type = "income";

  function addRecord(event) {
    let formData = new FormData(event.target);

    // REFACTOR: need use dynamic approach instead repeat to get data
    let newRecord = createRecordData(
      formData.get("type"),
      formData.get("category"),
      formData.get("account"),
      formData.get("date") || Date.now(),
      formData.get("amount"),
      formData.get("note")
    );
    updateRecordData(newRecord);
    closeForm();
  }

  function closeForm() {
    $isRecordFormOpen = false;
  }

  function changeType(event) {
    type = event.detail;
  }
</script>

<Modal open={$isRecordFormOpen} on:close={closeForm} title="new record">
  <form class="record-form" on:submit|preventDefault={addRecord}>
    <InputType on:changed={changeType} />
    <InputCategory {type} />
    <InputAccount />
    <InputAmount />
    <InputDate />
    <InputNote />
    <SubmitBtn title="add record" />
  </form>
</Modal>

<style>
  .record-form {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }
</style>
