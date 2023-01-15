<script lang="ts">
  import type { Nav, Page } from "$lib/types/payload-types";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let navItems: Nav;
  export let locale: string;
  export let open: boolean;
  let path: string;
  $: path = $page.url.pathname;
</script>

{#if open}
  <div
    transition:fly={{ duration: 500, x: 1024, opacity: 0.5, easing: quintOut }}
    class="min-h-full fixed right-0 left-0 top-0 bottom-0 transform z-[9999] bg-secondary-50 px-10 flex flex-col items-center justify-center"
  >
    <div
      class="group cursor-pointer inline-flex self-end absolute right-8 top-12"
      on:keydown
      on:click
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 group-hover:rotate-45 group-hover:stroke-secondary-default transition-transform duration-300"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <nav class="">
      <ul class="flex flex-col gap-y-8  text-center">
        {#each navItems.items as navItem}
          <li class="">
            <a
              on:keydown
              on:click
              href="/{locale}/{navItem.page.uri}"
              class="{`/${locale}/${navItem.page.uri}` == path
                ? '!text-primary-600'
                : ''} text-3xl font-normal duration-300 transition-colors lowercase hover:text-primary-default decoration-none"
              >{navItem.page.pageTitle}</a
            >
          </li>
        {/each}
      </ul>
    </nav>
  </div>
{/if}
