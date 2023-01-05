<script lang="ts">
  import type { LayoutData } from "./$types";
  import logo from "$lib/assets/svg/logo-test.svg";
  export let data: LayoutData;
  import { page } from "$app/stores";
  import LangSwitcher from "$lib/components/LangSwitcher.svelte";
  import MobileDrawer from "$lib/components/MobileDrawer.svelte";
  const defaultLocalized = [["en"], ["nl"]];

  let path: string;
  $: path = $page.url.pathname;

  let open: boolean;

  function openDrawer() {
    open = true;
  }

  function closeDrawer() {
    open = false;
  }
</script>

<div class="flex flex-col min-h-screen">
  <header class="py-10 border-b-primary-100 border-b">
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
                      : ''} text-lg font-normal duration-300 transition-colors hover:text-primary-default decoration-none"
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

          <div
            on:click={openDrawer}
            on:keydown={openDrawer}
            class="ml-5 flex lg:hidden flex-col w-[24px] gap-[6px] cursor-pointer justify-end items-end group js-hamburger "
            role="button"
            tabindex="0"
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
  <main class="">
    <slot />
  </main>

  <footer class="mt-auto py-4">
    <div class="container px-8 mx-auto">Footer</div>
  </footer>
</div>

<MobileDrawer
  navItems={data.nav}
  locale={data.locale}
  {open}
  on:click={closeDrawer}
/>
