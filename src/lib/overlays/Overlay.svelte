<script>
  export let centered = false;
</script>

<div class="overlay" class:centered>
  <slot />
</div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 1001;

    &.centered {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
