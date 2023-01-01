<script lang="ts">
  export let sizes: string;
  export let srcset: string;
</script>

<svelte:head>
  <link
    rel="preload"
    as="image"
    fetchpriority="high"
    imagesrcset={srcset}
    imagesizes={sizes}
  />
</svelte:head>
