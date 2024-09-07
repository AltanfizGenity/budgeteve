<script>
  import { createEventDispatcher } from "svelte";
  import InputGroup from "../InputGroup.svelte";
  let type = "income";

  const dispatch = createEventDispatcher();

  function changed(event) {
    dispatch("changed", event.currentTarget.value);
  }
</script>

<InputGroup name="type">
  <select bind:value={type} name="type" id="type" on:change={changed}>
    <option value="income">income</option>
    <option value="expense">expense</option>
  </select>
</InputGroup>
