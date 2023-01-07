<script lang="ts">
  export let sizes: string;
  export let srcset: string;
</script>

<svelte:head>
  <link
    rel="preload"
    as="image"
    imagesrcset={srcset}
    imagesizes={sizes}
    type="image/webp"
  />
</svelte:head>
