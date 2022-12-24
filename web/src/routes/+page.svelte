<script>
  export const prerender = true;
</script>

<!-- <script lang="ts">
  import type { Page } from "types/payload-types";
  import type { PageData } from "./$types";
  export let data: PageData;
  const {
    home: { block },
  } = data;

  // console.log(data.pages.docs[0]);
  const {
    nav: { items: navItems },
  } = data;
  const pages: Page[] = navItems.map((item: any) => item.page);
</script>

{#each block as block}
  <h1>{block.text}</h1>
{/each}

{#each pages as page}
  <h1>
    <a href="nl/{page.uri}">{page.pageTitle}</a>
  </h1>
{/each} -->
