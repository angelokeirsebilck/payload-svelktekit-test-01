<script lang="ts">
  import { page } from "$app/stores";
  import { env } from "$env/dynamic/public";
  import { locales } from "$lib/config/siteConfig";

  export let title: string;
  export let description: string | null = null;
</script>

<svelte:head>
  {#if env.PUBLIC_LIVE == "1"}
    <meta name="robots" content="all" />
  {:else}
    <meta name="robots" content="noindex,nofollow" />
  {/if}
  <title>{title}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
  <link rel="canonical" href={`${$page.url.origin}${$page.url.pathname}`} />

  {#if locales.length > 1}
    {#if $page.data.data.localized}
      <link
        rel="alternate"
        hreflang="x-default"
        href={`${$page.url.origin}${$page.url.pathname}`}
      />
      {#each $page.data.data.localized as locale}
        <link
          rel="alternate"
          hreflang={locale[0]}
          href={`${$page.url.origin}/${locale[0]}/${locale[1]}`}
        />
      {/each}
    {:else}
      <link
        rel="alternate"
        hreflang="x-default"
        href={`${$page.url.origin}${$page.url.pathname}`}
      />
      {#each locales as locale}
        <link
          rel="alternate"
          hreflang={locale}
          href={`${$page.url.origin}/${locale}`}
        />
      {/each}
    {/if}
  {/if}
</svelte:head>
