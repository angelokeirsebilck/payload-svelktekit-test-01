<script lang="ts">
  import { env } from "$env/dynamic/public";
  import PageBuilder from "$lib/components/blocks/PageBuilder.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: title =
    data?.pageData?.page?.meta?.title ||
    `${env.PUBLIC_COMPANY_NAME} - ${data?.pageData?.page?.pageTitle}`;
  $: description = data?.pageData?.page?.meta?.description;
</script>

<svelte:head>
  <title>{title}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<div class="container px-8 mx-auto my-16">
  <h1 class="mb-4 text-5xl">{data.pageData.page.pageTitle}</h1>
</div>
<PageBuilder blocks={data.pageData.page.block} />
