<script>
  // @ts-nocheck
  import Modal from "../overlays/Modal.svelte";
  import InputAmount from "./transaction-form/InputAmount.svelte";
  import InputTitle from "./transaction-form/InputTitle.svelte";
  import { isAccountFormOpen } from "../../store/appstate";
  import SubmitBtn from "./SubmitBtn.svelte";
  import { currentAccounts } from "../../store/appdata";

  function closeForm() {
    $isAccountFormOpen = false;
  }

  function createAccount(event) {
    let formData = new FormData(event.target);
    let { title, amount } = Object.fromEntries(formData.entries());
    let newAccount = {};

    newAccount.name = title;
    newAccount.amount = amount ? Number(amount) : 0;

    $currentAccounts = [...$currentAccounts, newAccount];
    closeForm();
  }
</script>

<Modal on:close={closeForm} open={$isAccountFormOpen} title="create account">
  <form on:submit|preventDefault={createAccount}>
    <InputTitle />
    <InputAmount required={false} />
    <SubmitBtn on:click />
  </form>
</Modal>
