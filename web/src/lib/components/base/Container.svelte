<script lang="ts">
  export let margin: boolean = true;
  export let noMargin: boolean = false;
  export let classes: string = "";
</script>

<div
  class="{!noMargin
    ? margin
      ? 'my-8 md:my-24'
      : 'py-8 md:py-24'
    : ''} mx-auto max-w-container px-8 {classes}"
>
  <slot />
</div>
