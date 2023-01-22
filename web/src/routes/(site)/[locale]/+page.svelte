<script lang="ts">
  import { env } from "$env/dynamic/public";
  import Seo from "$lib/components/base/SEO.svelte";
  import PageBuilder from "$lib/components/blocks/PageBuilder.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: title =
    data?.data?.homePage?.meta?.title ||
    `${env.PUBLIC_COMPANY_NAME} - ${data?.data?.homePage?.pageTitle}`;

  $: description = data?.data.homePage?.meta?.description;
</script>

<Seo {title} {description} />
<PageBuilder blocks={data.data.homePage.block} />
