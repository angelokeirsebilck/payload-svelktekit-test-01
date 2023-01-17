<script lang="ts">
  import type { Form } from "$lib/types/payload-types";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import { reporter, ValidationMessage } from "@felte/reporter-svelte";
  import { env } from "$env/dynamic/public";
  export let fields: any = null;
  export let schema: any = null;
  export let formId: string;
  export let formBlock: Form;
  import { trans } from "$lib/translations/translations";
  import { page } from "$app/stores";

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
    },
    extend: [validator({ schema }), reporter],
  });
</script>

<form use:form class="flex flex-col gap-4">
  {#each fields as field}
    <div class="flex flex-col {$errors[field.name] ? 'group error' : ''}">
      {#if field.name !== "gdpr"}
        <label for={field.name} class="">{field.label}</label>
      {/if}

      {#if field.blockType == "text"}
        <input
          type="text"
          name={field.name}
          class="aria-invalid:border-error-default focus:ring-0 focus:border-primary-default focus:outline-none focus:shadow-none"
        />
      {/if}
      {#if field.blockType == "email"}
        <input
          type="email"
          name={field.name}
          class="aria-invalid:border-error-default focus:ring-0 focus:border-primary-default focus:outline-none focus:shadow-none"
        />
      {/if}
      {#if field.blockType == "textarea"}
        <textarea
          name={field.name}
          rows="5"
          class="aria-invalid:border-error-default focus:ring-0 focus:border-primary-default focus:outline-none focus:shadow-none"
        />
      {/if}
      {#if field.blockType == "checkbox" && field.name !== "gdpr"}
        <input
          type="checkbox"
          name={field.name}
          class="aria-invalid:border-error-default focus:ring-0 focus:border-primary-default focus:outline-none focus:shadow-none"
        />
      {/if}
      {#if field.blockType == "fileUpload"}
        <input
          type="file"
          name={field.name}
          class="aria-invalid:border-error-default focus:ring-0 focus:border-primary-default focus:outline-none focus:shadow-none"
        />
      {/if}
      {#if field.blockType == "select"}
        <select
          name={field.name}
          class="aria-invalid:border-error-default focus:ring-0 focus:border-primary-default focus:outline-none focus:shadow-none"
        >
          {#each field.options as option}
            <option value={option.value}>{option.label}</option>
          {/each}
        </select>
      {/if}
      {#if field.name == "gdpr"}
        <div class="flex items-center">
          <input
            id={field.name}
            type="checkbox"
            name={field.name}
            class="aria-invalid:border-error-default focus:ring-0 w-5 h-5 text-primary-default focus:border-primary-default focus:outline-none focus:shadow-none"
          />
          <label for={field.name} class="ml-4"
            >{trans[$page.data.locale]["gdprAgree"]}</label
          >
        </div>
      {/if}
      <ValidationMessage for={field.name} let:messages={message}>
        {#if message}
          <div class="group-[.error]:text-error-default text-sm">
            {message[0]}
          </div>
        {/if}
      </ValidationMessage>
    </div>
  {/each}
  <div class="mt-6">
    <button type="submit" class="btn btn--primary btn--normal btn--medium"
      >{formBlock.submitButtonLabel}</button
    >
  </div>
</form>
