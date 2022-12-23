<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

{#each data.home.block as block}
  <h1>{block.text}</h1>
{/each}

<a href="/en">EN</a>

<a href="/nl">NL</a>
