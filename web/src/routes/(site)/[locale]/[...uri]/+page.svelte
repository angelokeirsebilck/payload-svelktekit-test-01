<script lang="ts">
  import { env } from "$env/dynamic/public";
  import Seo from "$lib/components/base/SEO.svelte";
  import PageBuilder from "$lib/components/blocks/PageBuilder.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: title =
    data?.data?.page?.meta?.title ||
    `${env.PUBLIC_COMPANY_NAME} - ${data?.data?.page?.pageTitle}`;
  $: description = data?.data?.page?.meta?.description;
</script>

<Seo {title} {description} />

<div class="container px-8 mx-auto my-16">
  <h1 class="mb-4 text-5xl max-w-2xl font-medium text-primary-default">
    {data.data.page.pageTitle}
  </h1>
</div>
<PageBuilder blocks={data.data.page.block} />
