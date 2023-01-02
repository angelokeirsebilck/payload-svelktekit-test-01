<script lang="ts">
  export let margin: boolean = true;
</script>

<div
  class="{margin
    ? 'my-12 md:my-24'
    : 'py-12 md:py-24'} mx-auto max-w-container px-8"
>
  <slot />
</div>
