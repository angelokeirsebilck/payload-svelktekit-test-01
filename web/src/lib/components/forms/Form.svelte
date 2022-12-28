<script lang="ts">
  import type { Form } from "$lib/types/payload-types";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import { reporter, ValidationMessage } from "@felte/reporter-svelte";
  import { env } from "$env/dynamic/public";
  import { toastStore } from "@skeletonlabs/skeleton";
  import type { ToastSettings } from "@skeletonlabs/skeleton";
  export let fields: any = null;
  export let schema: any = null;
  export let formId: string;

  const { form, errors, reset } = createForm({
    onSubmit: async (values) => {
      const dataToSend = Object.entries(values).map((field) => {
        return {
          field: field[0],
          value: field[1],
        };
      });

      const req = await fetch(
        `${env.PUBLIC_CMS_API_ENDPOINT}/form-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form: formId,
            submissionData: dataToSend,
          }),
        }
      );
      const data = await req.json();
      return data;
    },
    onSuccess(response: any, context) {
      reset();
      const formResponse: Form = response.doc.form;
      const t: ToastSettings = {
        message: formResponse.confirmationMessage[0].children[0].text,
        classes: "bg-success-500 rounded-md text-black",
        autohide: true,
        timeout: 3000,
      };
      toastStore.trigger(t);
    },
    extend: [validator({ schema }), reporter],
  });
</script>

<div class="container px-8 mx-auto">
  <form use:form class="flex flex-col gap-4">
    {#each fields as field}
      <div class={$errors[field.name] ? "group error" : ""}>
        <label for={field.name} class="group-[.error]:text-error-400-500-token"
          >{field.label}</label
        >
        {#if field.blockType == "text"}
          <input
            type="text"
            name={field.name}
            class="aria-invalid:input-invalid"
          />
        {/if}
        {#if field.blockType == "email"}
          <input
            type="email"
            name={field.name}
            class="aria-invalid:input-invalid"
          />
        {/if}
        {#if field.blockType == "textarea"}
          <textarea
            name={field.name}
            rows="5"
            class="aria-invalid:input-invalid"
          />
        {/if}
        {#if field.blockType == "checkbox"}
          <input
            type="checkbox"
            name={field.name}
            class="aria-invalid:input-invalid"
          />
        {/if}
        {#if field.blockType == "select"}
          <select name={field.name} class="aria-invalid:input-invalid">
            {#each field.options as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        {/if}
        <ValidationMessage for={field.name} let:messages={message}>
          {#if message}
            <div class="group-[.error]:text-error-400-500-token">
              {message[0]}
            </div>
          {/if}
        </ValidationMessage>
      </div>
    {/each}
    <div class="">
      <button type="submit">Sign In</button>
    </div>
  </form>
</div>
