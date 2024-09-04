<script>
  import { currentAccounts } from "../../../store/appdata";
  import InputGroup from "../InputGroup.svelte";
  let account = "cash";
</script>

<InputGroup name="account">
  <select bind:value={account} name="account" id="account">
    {#each $currentAccounts as { name }}
      <option value={name}>{name}</option>
    {/each}
  </select>
</InputGroup>
