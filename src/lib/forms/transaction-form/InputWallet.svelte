<script>
  import { wallets } from "../../../store/appdata";
  import InputGroup from "../InputGroup.svelte";
  let wallet = "cash";
</script>

<InputGroup name="wallet">
  <select bind:value={wallet} name="wallet" id="wallet">
    {#each $wallets as { name }}
      <option value={name}>{name}</option>
    {/each}
  </select>
</InputGroup>
