<script lang="ts">
  import { env } from "$env/dynamic/public";
  import FormBlock from "$lib/components/blocks/FormBlock.svelte";
  import PageBuilder from "$lib/components/blocks/PageBuilder.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: title =
    data?.home?.meta?.title ||
    `${env.PUBLIC_COMPANY_NAME} - ${data?.home?.pageTitle}`;

  $: description = data?.home?.meta?.description;
</script>

<!-- <div class="container px-8 mx-auto ">
  <h1 class="mb-4 text-5xl">{data.home.pageTitle}</h1>
</div> -->
<!-- <FormBlock formId="63a99ded5947c0bbb4579d01" /> -->
<svelte:head>
  <title>{title}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>
<PageBuilder blocks={data.home.block} />
