<script lang="ts">
  import { env } from "$env/dynamic/public";
  import PreloadImageKit from "./PreloadImageKit.svelte";

  export let src: string;
  export let transformations: string[][];
  export let sizes: string;
  export let alt: string;
  export let width: string;
  export let height: string;
  export let loading: "eager" | "lazy" | null | undefined = "lazy";

  const srcset = (): string => {
    let srcsetString: string = "";
    const srcsetParts = srcsetPart();

    srcsetParts.forEach((part) => {
      srcsetString += `${part[0]} ${part[1]}, `;
    });
    srcsetString = srcsetString.slice(0, -2);
    return srcsetString;
  };

  const srcsetPart = (): string[][] => {
    let srcsetArray: string[][] = [];

    transformations.forEach((transformation) => {
      let subSet: string = "tr:";

      transformation.forEach((value, index) => {
        if (index == 0) {
          subSet += `w-${value},`;
        } else {
          subSet += `${value},`;
        }
      });
      subSet += `f-auto`;

      srcsetArray.push([
        `${env.PUBLIC_IMAGE_KIT_URL}/${subSet}/${src}`,
        `${transformation[0]}w`,
      ]);
    });
    return srcsetArray;
  };

  srcsetPart();
</script>

{#if loading == "eager"}
  <PreloadImageKit {sizes} srcset={srcset()} />
{/if}

<picture>
  <img
    src={srcsetPart()[0][0]}
    {width}
    {height}
    srcset={srcset()}
    {sizes}
    {alt}
    {loading}
  />
</picture>
