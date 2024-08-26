<script>
  import InputGroup from "../InputGroup.svelte";
  let type = "income";
</script>

<InputGroup name="type">
  <select bind:value={type} name="type" id="type">
    <option value="income">income</option>
    <option value="expense">expense</option>
  </select>
</InputGroup>
