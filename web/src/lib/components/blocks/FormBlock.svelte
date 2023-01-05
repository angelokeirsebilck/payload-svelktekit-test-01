<script lang="ts">
  import { onMount } from "svelte";
  import { env } from "$env/dynamic/public";
  import * as zod from "zod";
  import Form from "../forms/Form.svelte";

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
    test: zod.string(),
  });
  let schemaDone: boolean = false;
  export let formId: string;

  onMount(async () => {
    const res = await fetch(`${env.PUBLIC_CMS_API_ENDPOINT}/forms/${formId}`);
    const data = await res.json();
    fields = data.fields;
    // console.log(fields);

    const isRequired: zod.ZodErrorMap = (val, ctx) => {
      return { message: "This field is required." };
    };

    data.fields.forEach((field: IPayloadField) => {
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
        schema = schema.omit({ test: true });
        //@ts-ignore
        schema = schema.extend(object);
      }
    });

    console.log(schema);
    schemaDone = true;
  });
</script>

{#if fields && schemaDone}
  <Form {schema} {fields} {formId} />
{/if}
