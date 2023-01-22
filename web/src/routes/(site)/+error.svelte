<script lang="ts">
  import { page } from "$app/stores";
  import ErrorPage from "$lib/components/base/ErrorPage.svelte";
</script>

<ErrorPage locale={$page.data.locale} />
