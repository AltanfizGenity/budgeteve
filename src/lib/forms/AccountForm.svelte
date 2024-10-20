<script>
  import Modal from "../overlays/Modal.svelte";
  import InputAmount from "./record-form/InputAmount.svelte";
  import InputTitle from "./record-form/InputTitle.svelte";
  import { isAccountFormOpen } from "../../store/appstate";
  import SubmitBtn from "./SubmitBtn.svelte";

  function closeForm() {
    $isAccountFormOpen = false;
  }

  function createAccount(event) {
    let formData = new FormData(event.target);
    let data = { ...Object.fromEntries(formData.entries()) };

    console.log(data);
  }
</script>

<Modal on:close={closeForm} open={$isAccountFormOpen} title="create account">
  <form on:submit|preventDefault={createAccount}>
    <InputTitle />
    <InputAmount />
    <SubmitBtn on:click />
  </form>
</Modal>
