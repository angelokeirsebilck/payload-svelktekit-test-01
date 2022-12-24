<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  // const {
  //   nav: { items: navItems },
  // } = data;
  // const pages: Page[] = navItems.map((item: any) => item.page);
</script>

<header>
  <nav>
    <ul>
      {#each data.nav.items as navItem}
        <a href="/{data.locale}/{navItem.page.uri}">{navItem.page.pageTitle}</a>
      {/each}
    </ul>
  </nav>
</header>
<slot />
<footer>Footer</footer>
