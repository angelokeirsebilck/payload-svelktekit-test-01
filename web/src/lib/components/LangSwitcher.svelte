<script lang="ts">
  import { menu } from "@skeletonlabs/skeleton";

  export let currentLocale: string;
  export let localized: [];
</script>

<span class="relative ml-5">
  <button
    class="uppercase flex items-center"
    use:menu={{ menu: "langSelector" }}
  >
    {currentLocale}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </button>

  <nav class="p-2 w-auto shadow-xl bg-white" data-menu="langSelector">
    <ul>
      {#each localized as locale}
        {#if locale[0] != currentLocale}
          <li>
            <a
              class="unstyled uppercase"
              href="/{locale[0]}{locale[1] ? `/${locale[1]}` : ''}"
              >{locale[0]}</a
            >
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
</span>
