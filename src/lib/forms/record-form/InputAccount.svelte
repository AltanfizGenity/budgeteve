<script>
  import InputGroup from "../InputGroup.svelte";
  let account = "cash";
</script>

<InputGroup name="account">
  <select bind:value={account} name="account" id="account">
    <option value="cash">cash</option>
    <option value="bank">bank</option>
  </select>
</InputGroup>
