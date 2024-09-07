<script>
  import { defaultCategories } from "../../../data/dataLab";
  import InputGroup from "../InputGroup.svelte";
  import { recordTypeValue } from "../../../store/appstate";
</script>

<InputGroup name="category">
  <select name="category" id="category">
    {#each defaultCategories[$recordTypeValue] as { categoryName }}
      <option value={categoryName}>{categoryName}</option>
    {/each}
  </select>
</InputGroup>
