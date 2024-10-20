<script>
  // @ts-nocheck
  import Modal from "../overlays/Modal.svelte";
  import InputAmount from "./transaction-form/InputAmount.svelte";
  import InputTitle from "./transaction-form/InputTitle.svelte";
  import { isWalletFormOpen } from "../../store/appstate";
  import SubmitBtn from "./SubmitBtn.svelte";
  import { wallets } from "../../store/appdata";

  function closeForm() {
    $isWalletFormOpen = false;
  }

  function createWallet(event) {
    let formData = new FormData(event.target);
    let { title, amount } = Object.fromEntries(formData.entries());
    let newWallet = {};

    newWallet.name = title;
    newWallet.amount = amount ? Number(amount) : 0;

    $wallets = [...$wallets, newWallet];
    closeForm();
  }
</script>

<Modal on:close={closeForm} open={$isWalletFormOpen} title="create wallet">
  <form on:submit|preventDefault={createWallet}>
    <InputTitle />
    <InputAmount required={false} />
    <SubmitBtn on:click title="add wallet" />
  </form>
</Modal>
