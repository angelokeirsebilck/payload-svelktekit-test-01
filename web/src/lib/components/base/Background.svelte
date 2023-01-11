<script lang="ts">
  export let bgColor: string;
</script>

<div class={bgColor == "light" ? "bg-primary-default/5" : ""}>
  <slot />
</div>
