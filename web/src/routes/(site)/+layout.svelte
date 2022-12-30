<script lang="ts">
  import type { LayoutData } from "./$types";
  import logo from "$lib/assets/svg/logo-test.svg";
  export let data: LayoutData;
  import { page } from "$app/stores";
  import LangSwitcher from "$lib/components/LangSwitcher.svelte";
  const defaultLocalized = [["en"], ["nl"]];
  import { Toast } from "@skeletonlabs/skeleton";
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
  import type { DrawerSettings } from "@skeletonlabs/skeleton";

  let path: string;
  $: path = $page.url.pathname;

  function drawerOpen(): void {
    drawerStore.open();
  }

  function drawerClose(): void {
    drawerStore.close();
  }
</script>

<div class="flex flex-col bg-surface-100-800-token min-h-screen text-token">
  <header class="py-10 border-b-blue-100 border-b bg-surface-200-700-token">
    <div class="container px-8 mx-auto">
      <div class="flex justify-between">
        <a href="/{data.locale}">
          <img src={logo} alt="Logoipsum Logo" />
        </a>
        <div class="flex items-center">
          <nav class="hidden lg:flex">
            <ul class="flex gap-x-8">
              {#each data.nav.items as navItem}
                <li>
                  <a
                    href="/{data.locale}/{navItem.page.uri}"
                    class="{`/${data.locale}/${navItem.page.uri}` == path
                      ? '!text-primary-600'
                      : ''} text-lg font-medium unstyled text-token duration-300 transition-colors hover:text-primary-600-300-token decoration-none"
                    >{navItem.page.pageTitle}</a
                  >
                </li>
              {/each}
            </ul>
          </nav>
          <LangSwitcher
            currentLocale={data.locale}
            localized={$page?.data?.pageData?.localized
              ? $page.data.pageData.localized
              : defaultLocalized}
          />
          <div class="ml-5"><LightSwitch /></div>

          <div
            class="ml-5 flex lg:hidden flex-col w-[24px] gap-[6px] cursor-pointer justify-end items-end group js-hamburger "
            role="button"
            tabindex="0"
            on:click={drawerOpen}
            on:keydown={drawerOpen}
          >
            <div
              class="w-[80%] h-[3px] bg-primary-500 transition-all group-hover:w-full"
            />
            <div
              class="w-full h-[3px] bg-primary-500 transition-all group-hover:w-full"
            />
            <div
              class="w-[65%] h-[3px] bg-primary-500 transition-all group-hover:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="text-token">
    <slot />
  </main>

  <footer class="mt-auto py-4 bg-surface-200-700-token text-token">
    <div class="container px-8 mx-auto">Footer</div>
  </footer>
  <Toast />

  <Drawer position="right" width="min-w-6xl">
    <nav class="px-10 flex flex-col">
      <div
        class="self-end pt-10 mb-10 cursor-pointer duration-300  stroke-black hover:stroke-red-500 group"
        on:keydown={drawerClose}
        on:click={drawerClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="curentColor"
          class="w-8 h-8 transition-transform transform group-hover:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <ul class="flex flex-col gap-y-8 items-end">
        {#each data.nav.items as navItem}
          <li>
            <a
              on:click={drawerClose}
              href="/{data.locale}/{navItem.page.uri}"
              class="{`/${data.locale}/${navItem.page.uri}` == path
                ? '!text-primary-600'
                : ''} text-3xl font-light unstyled text-token duration-300 transition-colors hover:text-primary-600-300-token decoration-none"
              >{navItem.page.pageTitle}</a
            >
          </li>
        {/each}
      </ul>
    </nav>
  </Drawer>
</div>
