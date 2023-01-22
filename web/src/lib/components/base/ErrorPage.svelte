<script lang="ts">
  import { defaultLocale } from "$lib/config/siteConfig";
  import { trans } from "$lib/translations/translations";
  import { page } from "$app/stores";

  export let locale: string = defaultLocale;
</script>

<div
  class=" bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
>
  <div class="mx-auto max-w-max">
    <main class="sm:flex">
      <p
        class="text-4xl font-bold tracking-tight text-primary-default sm:text-5xl unstyled"
      >
        {$page.status}
      </p>
      <div class="sm:ml-6">
        <div class="sm:border-l sm:border-gray-200 sm:pl-6">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            {#if trans[locale][$page.status]}
              {trans[locale][$page.status]}
            {:else}
              {$page.error.message}
            {/if}
          </h1>
          {#if trans[locale][`message${$page.status}`]}
            <p class="mt-1 text-base text-gray-500">
              {trans[locale][`message${$page.status}`]}
            </p>
          {/if}
        </div>
        {#if $page.status == 404}
          <div
            class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"
          >
            <a
              href="/{locale}"
              class="inline-flex unstyled items-center  border border-transparent bg-primary-default px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {trans[locale][`goBackHome`]}</a
            >
          </div>
        {/if}
      </div>
    </main>
  </div>
</div>
