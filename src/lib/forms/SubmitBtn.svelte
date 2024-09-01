<script>
  import { createEventDispatcher } from "svelte";

  export let classname = "";
  export let title = "submit";

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("click");
  }
</script>

<button class={`submit-btn ${classname}`} on:click={click}>{title}</button>

<style>
  .submit-btn {
    padding: 0.5rem 1rem;
    margin-top: var(--gutter);
    background-color: var(--primaryColor);
    border: none;
  }
</style>
