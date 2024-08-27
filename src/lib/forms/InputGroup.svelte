<script>
  export let name;
  export let label = "";
</script>

<div class="input-group">
  <label for={name}>{label || name}</label>
  <slot />
</div>

<style>
  .input-group {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap1);

    & > *:not(label) {
      padding: 0.5rem 1rem;
    }
  }
</style>
