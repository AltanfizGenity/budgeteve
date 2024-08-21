<script>
  export let classname = "";
</script>

<button class={`icon-btn ${classname}`}>
  <slot />
</button>

<style>
  .icon-btn {
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
  }
</style>
