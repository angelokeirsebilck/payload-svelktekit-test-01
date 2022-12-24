<script lang="ts">
  import type { LayoutData } from "./$types";
  import logo from "$lib/assets/svg/logo-test.svg";
  export let data: LayoutData;
  // const {
  //   nav: { items: navItems },
  // } = data;
  // const pages: Page[] = navItems.map((item: any) => item.page);
</script>

<div class="flex flex-col min-h-screen">
  <header class="py-10 border-b-blue-100 border-b">
    <div class="container px-8 mx-auto">
      <div class="flex justify-between">
        <a href="/{data.locale}">
          <img src={logo} alt="Logoipsum Logo" />
        </a>
        <nav>
          <ul class="flex gap-x-8">
            {#each data.nav.items as navItem}
              <li>
                <a
                  href="/{data.locale}/{navItem.page.uri}"
                  class="text-lg font-medium">{navItem.page.pageTitle}</a
                >
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <slot />
  </main>

  <footer class="mt-auto py-4 bg-blue-50">
    <div class="container px-8 mx-auto">Footer</div>
  </footer>
</div>
