<script lang="ts">
  import type { LayoutData } from "./$types";
  import { disableScrollHandling } from "$app/navigation";
  import logo from "$lib/assets/svg/logo-demo.svg";
  export let data: LayoutData;
  import { page } from "$app/stores";
  import LangSwitcher from "$lib/components/LangSwitcher.svelte";
  import MobileDrawer from "$lib/components/MobileDrawer.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import PageTransition from "$lib/components/base/PageTransition.svelte";
  // import { gsap } from "gsap";
  // import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { afterUpdate, onMount } from "svelte";
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

  afterUpdate(() => {
    // disableScrollHandling();
  });
</script>

<div class="flex flex-col min-h-screen overflow-hidden text-black-default">
  <header class="py-6 bg-primary-default/5">
    <div class="container px-8 mx-auto">
      <div class="flex justify-between">
        <a href="/{data.locale}">
          <img src={logo} alt="Logoipsum Logo" width="140" height="66" />
        </a>
        <div class="flex items-center">
          <nav class="hidden lg:flex">
            <ul class="flex gap-x-8">
              {#each data.nav.items as navItem}
                <li>
                  <a
                    href="/{data.locale}/{navItem.page.uri}"
                    class="{`/${data.locale}/${navItem.page.uri}` == path
                      ? '!text-primary-default'
                      : ''} text-lg font-normal duration-300 lowercase transition-colors hover:text-primary-default decoration-none"
                    >{navItem.page.pageTitle}</a
                  >
                </li>
              {/each}
            </ul>
          </nav>
          <LangSwitcher
            currentLocale={data.locale}
            localized={$page?.data?.data?.localized
              ? $page.data?.data?.localized
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
              class="w-[80%] h-[3px] bg-primary-default transition-all group-hover:w-full"
            />
            <div
              class="w-full h-[3px] bg-primary-default transition-all group-hover:w-full"
            />
            <div
              class="w-[65%] h-[3px] bg-primary-default transition-all group-hover:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </header>

  <PageTransition pathname={data.pathname}>
    <slot />
  </PageTransition>
  <!-- <main>
    <slot />
  </main> -->
  <Footer />
</div>

<MobileDrawer
  navItems={data.nav}
  locale={data.locale}
  {open}
  on:click={closeDrawer}
/>
