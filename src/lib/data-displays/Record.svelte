<script>
  import RiSalary from "../icons/RI-Salary.svelte";
  export let category, amount, title;
</script>

<div class="record">
  <div class="details">
    <div class="badge">
      <div class="icon">
        <RiSalary />
      </div>
    </div>
    <div class="info">
      {#if title}
        <div class="title">{title}</div>
      {/if}
      <div class="category" style:color={title ? "#707070" : null}>
        {category}
      </div>
    </div>
  </div>
  <div class="amount">{amount}</div>
</div>

<style>
  .record {
    display: flex;
    width: 100%;
    padding: 1.5rem;
    border-radius: var(--radius);
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
  }

  .details {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .badge {
    background-color: rgba(151, 83, 223, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: var(--radius);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    color: var(--accentColor);
  }

  .category {
    text-transform: capitalize;
  }
</style>
