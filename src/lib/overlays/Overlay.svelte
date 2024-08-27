<script>
</script>

<div class="overlay">
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
  }
</style>
