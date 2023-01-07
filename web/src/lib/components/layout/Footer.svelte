<script lang="ts">
  import type { Page, Social } from "$lib/types/payload-types";
  import { afterUpdate } from "svelte";
  import { page } from "$app/stores";
  import logo from "$lib/assets/svg/logo-test.svg";
  import SocialIcons from "../base/SocialIcons.svelte";
  import { env } from "$env/dynamic/public";

  type SocialSingle = Social["social"][0];

  $: navItems = [] as Page[];
  let path: string;
  $: path = $page.url.pathname;
  $: socials = $page.data.socials.social as SocialSingle[];

  afterUpdate(async () => {
    navItems = $page.data.nav.items.map((item: any) => {
      return item.page as Page;
    });
  });
</script>

<footer class="mt-auto">
  <div class="mx-auto max-w-7xl overflow-hidden py-12 px-6 lg:px-8">
    <div class="flex flex-col">
      <div class="self-center">
        <a href="/{$page.data.locale}">
          <img src={logo} alt="Logoipsum Logo" />
        </a>
      </div>

      <nav class="mt-10">
        <ul class="flex gap-y-4 gap-x-8 justify-center flex-wrap ">
          {#each navItems as navItem}
            <li>
              <a
                href="/{$page.data.locale}/{navItem.uri}"
                class="{`/${$page.data.locale}/${navItem.uri}` == path
                  ? '!text-primary-600'
                  : ''} text-lg font-normal duration-300 transition-colors hover:text-primary-default decoration-none"
                >{navItem.pageTitle}</a
              >
            </li>
          {/each}
        </ul>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        {#each socials as social}
          <a
            href={social.url}
            class="group"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <SocialIcons
              iconSize="w-6 h-6"
              iconClasses="group-hover:text-primary-default transition-colors duration-300"
              iconString={social.social}
            />
          </a>
        {/each}
      </div>
      <div class="mt-8 self-center">
        © {new Date().getFullYear()}
        {env.PUBLIC_COMPANY_NAME}
      </div>
    </div>
  </div>
</footer>
