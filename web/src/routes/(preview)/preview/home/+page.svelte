<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { env } from "$env/dynamic/public";
  import type { PageData } from "./$types";
  import PageBuilder from "$lib/components/blocks/PageBuilder.svelte";
  export let data: PageData;

  import { io } from "socket.io-client";

  const socket = io(env.PUBLIC_CMS_URL);

  socket.on("update", () => {
    // invalidate("preview:home");
    window.location.href = window.location.href;
  });
</script>

<PageBuilder blocks={data.data.homePage.block} />
