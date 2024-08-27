<script>
  import { createRecordData } from "../../data/dataLab";
  import { currentRecords } from "../../store/appdata";
  import Modal from "../overlays/Modal.svelte";
  import InputAccount from "./record/InputAccount.svelte";
  import InputAmount from "./record/InputAmount.svelte";
  import InputCategory from "./record/InputCategory.svelte";
  import InputDate from "./record/InputDate.svelte";
  import InputNote from "./record/InputNote.svelte";
  import InputType from "./record/InputType.svelte";

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

<Modal>
  <form class="record-form" on:submit|preventDefault={addRecord}>
    <InputType />
    <InputCategory />
    <InputAccount />
    <InputAmount />
    <InputDate />
    <InputNote />
    <button>add record</button>
  </form>
</Modal>
