<script lang="ts">
  import { page } from "$app/stores";
</script>

Custom error
<h1>{$page.status}: {$page.error?.message}</h1>
