<script>
  import { parseDateBasicFormat } from "../../../utils/date";
  import InputGroup from "../InputGroup.svelte";
  let date = parseDateBasicFormat(Date.now());
</script>

<InputGroup name="date">
  <input type="date" bind:value={date} name="date" id="date" />
</InputGroup>
