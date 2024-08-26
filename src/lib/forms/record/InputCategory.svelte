<script>
  import InputGroup from "../InputGroup.svelte";
  let category = "salary";
</script>

<InputGroup name="category">
  <select bind:value={category} name="category" id="category">
    <option value="salary">salary</option>
    <option value="rent">rent</option>
  </select>
</InputGroup>
