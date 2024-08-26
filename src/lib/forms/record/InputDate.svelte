<script>
  import InputGroup from "../InputGroup.svelte";
  let date = Date.now();
</script>

<InputGroup name="date">
  <input type="date" bind:value={date} name="date" id="date" />
</InputGroup>
