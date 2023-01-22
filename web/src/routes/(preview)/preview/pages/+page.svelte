<script lang="ts">
  import { env } from "$env/dynamic/public";
  import Seo from "$lib/components/base/SEO.svelte";
  import { invalidate } from "$app/navigation";
  import PageBuilder from "$lib/components/blocks/PageBuilder.svelte";
  import type { PageData } from "./$types";

  import { io } from "socket.io-client";
  const socket = io(env.PUBLIC_CMS_URL);

  socket.on("update", () => {
    window.location.href = window.location.href;
  });

  export let data: PageData;
  $: title =
    data?.pageData?.page?.meta?.title ||
    `${env.PUBLIC_COMPANY_NAME} - ${data?.pageData?.page?.pageTitle}`;
  $: description = data?.pageData?.page?.meta?.description;

  // setInterval(() => {}, 2000);
</script>

<!-- <Seo {title} {description} /> -->

<div class="container px-8 mx-auto my-16">
  <h1 class="mb-4 text-5xl max-w-2xl font-medium text-primary-default">
    {data.pageData.page.pageTitle}
  </h1>
</div>

<PageBuilder blocks={data.pageData.page.block} />
