<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-hamlindigo.css";
  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.css";
  import type { LayoutData } from "./$types";
  import logo from "$lib/assets/svg/logo-test.svg";
  export let data: LayoutData;
  import { page } from "$app/stores";
  import LangSwitcher from "$lib/components/LangSwitcher.svelte";
  const defaultLocalized = [["en"], ["nl"]];
  import { Toast } from "@skeletonlabs/skeleton";
  import { LightSwitch } from "@skeletonlabs/skeleton";
</script>

<div class="flex flex-col bg-surface-100-800-token min-h-screen text-token">
  <header class="py-10 border-b-blue-100 border-b bg-surface-200-700-token">
    <div class="container px-8 mx-auto">
      <div class="flex justify-between">
        <a href="/{data.locale}">
          <img src={logo} alt="Logoipsum Logo" />
        </a>
        <div class="flex items-center">
          <nav class="">
            <ul class="flex gap-x-8">
              {#each data.nav.items as navItem}
                <li>
                  <a
                    href="/{data.locale}/{navItem.page.uri}"
                    class="text-lg font-medium unstyled text-token duration-300 transition-colors hover:text-primary-600-300-token decoration-none"
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
        </div>
      </div>
    </div>
  </header>
  <main class=" text-token">
    <slot />
  </main>

  <footer class="mt-auto py-4 bg-surface-200-700-token text-token">
    <div class="container px-8 mx-auto">Footer</div>
  </footer>
  <Toast />
</div>
