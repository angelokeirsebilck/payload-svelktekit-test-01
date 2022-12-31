<script lang="ts">
  import { installTwicPics } from "@twicpics/components/svelte3";
  import "@twicpics/components/style.css";
  import "../app.css";

  installTwicPics({
    domain: `https://angelokeirsebilck.twic.pics`,
  });
</script>

<slot />
