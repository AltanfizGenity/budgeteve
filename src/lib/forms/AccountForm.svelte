<script>
  import Modal from "../overlays/Modal.svelte";
  import InputAmount from "./record-form/InputAmount.svelte";
  import InputTitle from "./record-form/InputTitle.svelte";
  import { isAccountFormOpen } from "../../store/appstate";
  import SubmitBtn from "./SubmitBtn.svelte";

  function closeForm() {
    $isAccountFormOpen = false;
  }
</script>

<Modal on:close={closeForm} open={$isAccountFormOpen} title="create account">
  <form>
    <InputTitle />
    <InputAmount />
    <SubmitBtn on:click />
  </form>
</Modal>
