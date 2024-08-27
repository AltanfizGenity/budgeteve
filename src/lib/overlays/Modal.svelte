<div class="overlay">
  <div class="modal">
    <div class="header">
      <h4 class="title">Modal</h4>
      <button class="close-btn">x</button>
    </div>
    <slot />
  </div>
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

  .modal {
    width: 500px;
    padding: var(--contentPadding);
    background-color: var(--bgColor);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
</style>
