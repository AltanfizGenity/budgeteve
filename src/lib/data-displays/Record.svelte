<script>
  import { parseDateDefault } from "../../utils/date";
  export let category, amount, date;

  const parsedDate = parseDateDefault(date);
</script>

<div class="record">
  <div class="details">
    <div class="icon">icon</div>
    <div class="category">
      {category}
    </div>
    <div class="date">
      {parsedDate}
    </div>
  </div>
  <div class="amount">{amount}</div>
</div>

<style>
  .record {
    display: flex;
    width: 100%;
    padding: var(--contentPadding);
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
  }

  .details {
    display: flex;
    align-items: center;
    gap: var(--whiteSpace);
  }
</style>
