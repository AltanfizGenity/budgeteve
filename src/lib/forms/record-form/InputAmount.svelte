<script>
  import InputGroup from "../InputGroup.svelte";
  let amount = null;
</script>

<InputGroup name="amount">
  <input type="number" bind:value={amount} name="amount" placeholder="0" id="amount" />
</InputGroup>
