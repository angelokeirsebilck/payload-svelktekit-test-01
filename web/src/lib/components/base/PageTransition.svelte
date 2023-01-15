<script lang="ts">
  import { fly } from "svelte/transition";
  export let pathname = "";
</script>

{#key pathname}
  <main
    class="transition-none"
    in:fly={{ x: -30, duration: 600, delay: 0 }}
    out:fly={{ x: 0, duration: 0 }}
  >
    <slot />
  </main>
{/key}
