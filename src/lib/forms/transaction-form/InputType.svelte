<script>
  import { transactionType } from "../../../store/appstate";
  import InputGroup from "../InputGroup.svelte";
</script>

<InputGroup name="type">
  <select bind:value={$transactionType} name="type" id="type">
    <option value="income">income</option>
    <option value="expense">expense</option>
  </select>
</InputGroup>
