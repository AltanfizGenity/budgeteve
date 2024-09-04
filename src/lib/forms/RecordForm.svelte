<script>
  import { createRecordData } from "../../data/dataLab";
  import { currentRecords } from "../../store/appdata";
  import { isRecordFormOpen } from "../../store/appstate";
  import { updateRecords } from "../../utils/data";
  import Modal from "../overlays/Modal.svelte";
  import InputAccount from "./record-form/InputAccount.svelte";
  import InputAmount from "./record-form/InputAmount.svelte";
  import InputCategory from "./record-form/InputCategory.svelte";
  import InputDate from "./record-form/InputDate.svelte";
  import InputNote from "./record-form/InputNote.svelte";
  import InputType from "./record-form/InputType.svelte";
  import SubmitBtn from "./SubmitBtn.svelte";

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
    updateRecords(newRecord);
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
