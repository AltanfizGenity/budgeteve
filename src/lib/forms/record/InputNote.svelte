<script>
  import InputGroup from "../InputGroup.svelte";
  let note = "";
</script>

<InputGroup name="note">
  <textarea bind:value={note} name="note" id="note"></textarea>
</InputGroup>
