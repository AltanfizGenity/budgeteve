<script>
  import { defaultCategories } from "../../../data/dataLab";
  import InputGroup from "../InputGroup.svelte";

  export let type = "income";
</script>

<InputGroup name="category">
  <select name="category" id="category">
    {#each defaultCategories[type] as { categoryName }}
      <option value={categoryName}>{categoryName}</option>
    {/each}
  </select>
</InputGroup>
