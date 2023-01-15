<script lang="ts">
  import { onMount } from "svelte";
  import * as zod from "zod";
  import Form from "../forms/Form.svelte";
  import type { FormBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";

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

  export let content: FormBlock;

  onMount(async () => {
    // const res = await fetch(`${env.PUBLIC_CMS_API_ENDPOINT}/forms/${formId}`);
    // const data = await res.json();
    fields = content.form.fields;
    // console.log(fields);

    const isRequired: zod.ZodErrorMap = (val, ctx) => {
      return { message: "This field is required." };
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
            .min(1, { message: "This field is required." });
        }
        if (field.blockType == "checkbox") {
          object[field.name] = zod.literal(true, {
            errorMap: isRequired,
          });
        }

        if (field.blockType == "fileUpload") {
          object[field.name] = zod
            .any()
            .refine((files: any) => files?.length === 0, "File is required.");
        }

        if (field.blockType == "email") {
          object[field.name] = zod
            .string()
            .min(1, { message: "This field is required." })
            .email({ message: "Please enter a valid e-mail." });
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
      <div class="col-span-full md:col-span-6">
        <Form
          {schema}
          formBlock={content.form}
          {fields}
          formId={content.form.id}
        />
      </div>
    </div>
  </Container>
{/if}
