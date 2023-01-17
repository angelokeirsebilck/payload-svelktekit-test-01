<script lang="ts">
  import { onMount } from "svelte";
  import * as zod from "zod";
  import Form from "../forms/Form.svelte";
  import type { ContactBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";
  import CompanyInfo from "../base/CompanyInfo.svelte";
  import { trans } from "$lib/translations/translations";
  import { page } from "$app/stores";

  interface IPayloadOption {
    name: string;
    label: string;
    id: string;
  }

  interface IPayloadField {
    name: string;
    label: string;
    required: boolean;
    options?: IPayloadOption[];
    id: string;
    blockType: string;
  }

  let fields: any;
  let schema = zod.object({
    removeLater: zod.string(),
  });
  let schemaDone: boolean = false;

  export let content: ContactBlock;

  onMount(async () => {
    // const res = await fetch(`${env.PUBLIC_CMS_API_ENDPOINT}/forms/${formId}`);
    // const data = await res.json();
    //@ts-ignore
    fields = content.form.fields;
    // console.log(fields);

    const isRequired: zod.ZodErrorMap = (val, ctx) => {
      //@ts-ignore
      return { message: trans[$page.data.locale]["requiredField"] };
    };

    fields.forEach((field: IPayloadField) => {
      if (field.required) {
        const object = JSON.parse(`{"${field.name}": "test"}`);
        if (
          field.blockType == "text" ||
          field.blockType == "select" ||
          field.blockType == "textarea"
        ) {
          object[field.name] = zod
            .string()
            //@ts-ignore
            .min(1, { message: trans[$page.data.locale]["requiredField"] });
        }
        if (field.blockType == "checkbox") {
          object[field.name] = zod.literal(true, {
            errorMap: isRequired,
          });
        }

        if (field.blockType == "fileUpload") {
          object[field.name] = zod.any().refine(
            (files: any) => files?.length === 0,
            //@ts-ignore
            trans[$page.data.locale]["requiredField"]
          );
        }

        if (field.blockType == "email") {
          object[field.name] = zod
            .string()
            //@ts-ignore
            .min(1, { message: trans[$page.data.locale]["requiredField"] })
            //@ts-ignore
            .email({ message: trans[$page.data.locale]["validEmail"] });
        }
        //@ts-ignore
        schema = schema.omit({ removeLater: true });
        //@ts-ignore
        schema = schema.extend(object);
      }
    });

    // console.log(schema);
    schemaDone = true;
  });
</script>

{#if fields && schemaDone && content.form.id}
  <Container>
    <div class="default-grid">
      <div class="col-span-full md:col-span-5">
        <Form
          formBlock={content.form}
          {schema}
          {fields}
          formId={content.form.id}
        />
      </div>
      <div class="col-span-full md:col-start-7 md:col-span-6 @container ">
        <CompanyInfo />
      </div>
    </div>
  </Container>
{/if}
