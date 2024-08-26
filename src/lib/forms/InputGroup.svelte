<script>
  export let name;
  export let label = "";
</script>

<div class="input-group">
  <label for={name}>{label || name}</label>
  <slot />
</div>
