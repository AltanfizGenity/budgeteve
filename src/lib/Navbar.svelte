<script>
  import { AddBtn, BalanceAccountsBtn, HomeBtn, RecordsBtn } from "./btns/icon-btns";
  import viteLogo from "/vite.svg";
</script>

<nav>
  <div class="logo">
    <img src={viteLogo} alt="logo" />
  </div>
  <ul class="router-controls">
    <li><HomeBtn /></li>
    <li><RecordsBtn /></li>
    <li><BalanceAccountsBtn /></li>
  </ul>
  <ul class="actions">
    <li><AddBtn /></li>
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--navWidth);
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center start;
    z-index: 1000;
    background-color: hsl(270, 45%, 5%);
    gap: var(--itemGap3);
    padding-block: var(--whiteSpace);
  }
  .logo {
    width: 30px;
    height: 30px;
  }

  .router-controls {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap2);
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: var(--itemGap2);
  }
</style>
