<script>
  import { defaultCategories } from "../../../data/dataLab";
  import InputGroup from "../InputGroup.svelte";
  let category = "salary";
</script>

<InputGroup name="category">
  <select bind:value={category} name="category" id="category">
    {#each defaultCategories["income"] as { categoryName }}
      <option value={categoryName}>{categoryName}</option>
    {/each}
  </select>
</InputGroup>
