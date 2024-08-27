<script>
  import Overlay from "./Overlay.svelte";
</script>

<Overlay centered>
  <div class="modal">
    <div class="header">
      <h4 class="title">Modal</h4>
      <button class="close-btn">x</button>
    </div>
    <slot />
  </div>
</Overlay>

<style>
  .modal {
    width: 500px;
    padding: var(--contentPadding);
    background-color: var(--bgColor);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
</style>
