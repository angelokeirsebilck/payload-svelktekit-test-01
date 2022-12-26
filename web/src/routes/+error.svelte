<script lang="ts">
  import { page } from "$app/stores";
  import { trans } from "$lib/translations/translations";
</script>

<div
  class="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
>
  <div class="mx-auto max-w-max">
    <main class="sm:flex">
      <p
        class="text-4xl font-bold tracking-tight text-blue-300 sm:text-5xl unstyled"
      >
        {$page.status}
      </p>
      <div class="sm:ml-6">
        <div class="sm:border-l sm:border-gray-200 sm:pl-6">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            {trans[$page.data.locale][$page.error?.code]}
          </h1>
          {#if $page.error?.errorMessage}
            <p class="mt-1 text-base text-gray-500">
              {trans[$page.data.locale][$page.error?.errorMessage]}
            </p>
          {/if}
        </div>
        <div
          class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"
        >
          <a
            href="/{$page.error?.locale}"
            class="inline-flex unstyled items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >Go back home</a
          >
        </div>
      </div>
    </main>
  </div>
</div>
