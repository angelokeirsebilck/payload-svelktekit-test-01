<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>{data.page.pageTitle}</h1>
{#each data.page.block as item}
  {item.text}
{/each}
