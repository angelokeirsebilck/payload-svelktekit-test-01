<script lang="ts">
  import { invalidate } from "$app/navigation";
  import type { PageData } from "./$types";
  import PageBuilder from "$lib/components/blocks/PageBuilder.svelte";
  export let data: PageData;

  setInterval(() => {
    invalidate("preview:home");
  }, 2000);
</script>

<PageBuilder blocks={data.home.block} />
