<script lang="ts">
  import { fly } from "svelte/transition";
  export let pathname = "";
</script>

{#key pathname}
  <main
    class="transition-none"
    in:fly={{ x: -20, duration: 500, delay: 250 }}
    out:fly={{ x: 10, duration: 250 }}
  >
    <slot />
  </main>
{/key}
