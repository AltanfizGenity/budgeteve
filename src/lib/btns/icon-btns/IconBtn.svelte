<script>
  import { createEventDispatcher } from "svelte";

  export let classname = "";
  export let size = 24;

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("click");
  }
</script>

<button class={`icon-btn ${classname}`} style="--size: {size}px;" on:click={click}>
  <slot />
</button>

<style>
  .icon-btn {
    width: var(--size);
    height: var(--size);
    background-color: transparent;
    border: none;

    &:hover {
      color: var(--primaryColor);
      cursor: pointer;
    }
  }
</style>
