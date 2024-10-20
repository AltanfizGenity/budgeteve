<script>
  import InputGroup from "../InputGroup.svelte";

  export let required = true;
  export let min = 0;
  export let amount = null;
</script>

<InputGroup name="amount">
  <input type="number" bind:value={amount} name="amount" placeholder="0" id="amount" {required} {min} />
</InputGroup>
