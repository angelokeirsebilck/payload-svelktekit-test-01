<script lang="ts">
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  } from "@rgossiaux/svelte-headlessui";
  import { Transition } from "@rgossiaux/svelte-headlessui";
  export let currentLocale: string;
  export let localized: [];
</script>

<Menu class="relative inline-block text-left ml-5" let:open>
  <MenuButton
    class="inline-flex items-center w-full text-black justify-center rounded-md px-2 font-medium"
  >
    <span class="uppercase"> {currentLocale}</span>

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
    </svg></MenuButton
  >
  <Transition
    {open}
    enter="transition-opacity duration-75"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <MenuItems
      class="absolute right-0 px-3 py-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      {#each localized as locale}
        {#if locale[0] != currentLocale}
          <MenuItem
            class={({ active }) => (active ? "text-primary-default" : "")}
          >
            <a
              class="uppercase text-token"
              href="/{locale[0]}{locale[1] ? `/${locale[1]}` : ''}"
              >{locale[0]}</a
            >
          </MenuItem>
        {/if}
      {/each}
    </MenuItems>
  </Transition>
</Menu>
