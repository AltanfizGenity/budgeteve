<script>
  import { nanoid } from "nanoid";
  import { isTransactionFormOpen } from "../../store/appstate";
  import { updateTransactions } from "../../utils/data";
  import Modal from "../overlays/Modal.svelte";
  import InputWallet from "./transaction-form/InputWallet.svelte";
  import InputAmount from "./transaction-form/InputAmount.svelte";
  import InputCategory from "./transaction-form/InputCategory.svelte";
  import InputDate from "./transaction-form/InputDate.svelte";
  import InputNote from "./transaction-form/InputNote.svelte";
  import InputType from "./transaction-form/InputType.svelte";
  import SubmitBtn from "./SubmitBtn.svelte";
  import InputTitle from "./transaction-form/InputTitle.svelte";

  function addTransaction(event) {
    let formData = new FormData(event.target);
    let data = { id: nanoid(), ...Object.fromEntries(formData.entries()) };
    updateTransactions(data);
    closeForm();
  }

  function closeForm() {
    $isTransactionFormOpen = false;
  }
</script>

<Modal open={$isTransactionFormOpen} on:close={closeForm} title="create transaction">
  <form class="transaction-form" on:submit|preventDefault={addTransaction}>
    <InputTitle />
    <InputType />
    <InputCategory />
    <InputWallet />
    <InputAmount />
    <InputDate />
    <InputNote />
    <SubmitBtn title="add transaction" />
  </form>
</Modal>

<style>
  .transaction-form {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);
  }
</style>
