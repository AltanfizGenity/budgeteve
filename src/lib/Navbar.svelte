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
