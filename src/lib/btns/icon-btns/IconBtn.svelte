<script>
  export let classname = "";
  export let size = 24;
</script>

<button class={`icon-btn ${classname}`} style="--size: {size}px;">
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
      box-shadow: 0 0 32px var(--primaryColor);
      cursor: pointer;
    }
  }
</style>
