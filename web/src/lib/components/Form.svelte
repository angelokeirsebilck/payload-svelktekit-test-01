<script lang="ts">
  import { onMount } from "svelte";
  import { env } from "$env/dynamic/public";

  onMount(async () => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/forms/63a99ded5947c0bbb4579d01`
    );
    const data = await res.json();
  });

  const handleSubmit = async () => {
    const dataToSend = [
      {
        field: "Voornaam",
        value: "Angelo from sveltekit",
      },
      {
        field: "Achternaam",
        value: "Keirsebilck",
      },
      {
        field: "Onderwerp",
        value: "webshop",
      },
    ];
    const req = await fetch(`${env.PUBLIC_CMS_API_ENDPOINT}/form-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        form: "63a99ded5947c0bbb4579d01",
        submissionData: dataToSend,
      }),
    });

    const res = await req.json();
    console.log(res);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <button type="submit"> Submit </button>
</form>
