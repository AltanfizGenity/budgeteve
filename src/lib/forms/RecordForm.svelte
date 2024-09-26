<script>
  import { nanoid } from "nanoid";
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
  import InputTitle from "./record-form/InputTitle.svelte";

  function addRecord(event) {
    let formData = new FormData(event.target);
    let data = { id: nanoid(), ...Object.fromEntries(formData.entries()) };
    console.log(data);
    updateRecordData(data);
    closeForm();
  }

  function closeForm() {
    $isRecordFormOpen = false;
  }
</script>

<Modal open={$isRecordFormOpen} on:close={closeForm} title="new record">
  <form class="record-form" on:submit|preventDefault={addRecord}>
    <InputTitle />
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
