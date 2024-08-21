<script>
  import viteLogo from "/vite.svg";

  let routerControls = ["home", "records", "accounts"];
  let actions = ["add"];
</script>

<nav>
  <div class="logo">
    <img src={viteLogo} alt="logo" />
  </div>
  <ul class="router-controls">
    {#each routerControls as route}
      <li>
        <button>{route}</button>
      </li>
    {/each}
  </ul>
  <ul class="actions">
    {#each actions as action}
      <li>
        <button>{action}</button>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 96px;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center start;
    z-index: 1000;
    background-color: hsl(270, 45%, 5%);
    gap: var(--itemGap2);
    padding-block: var(--whiteSpace);
  }
  .logo {
    width: 30px;
    height: 30px;
  }
</style>
