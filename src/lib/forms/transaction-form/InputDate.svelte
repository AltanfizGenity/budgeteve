<script>
  import { parseDateBasicFormat } from "../../../utils/date";
  import InputGroup from "../InputGroup.svelte";
  let date = parseDateBasicFormat(Date.now());
</script>

<!-- TODO: use external date picker library for simplicity and fast development -->
<InputGroup name="date">
  <input type="date" bind:value={date} name="date" id="date" />
</InputGroup>
