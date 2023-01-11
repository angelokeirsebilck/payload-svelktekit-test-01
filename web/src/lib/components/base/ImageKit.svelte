<script lang="ts">
  import { env } from "$env/dynamic/public";
  import PreloadImageKit from "./PreloadImageKit.svelte";

  export let src: string;
  export let transformations: string[][];
  export let sizes: string;
  export let alt: string;
  export let classes: string = "";
  export let width: string;
  export let height: string;
  export let loading: "eager" | "lazy" | null | undefined = "lazy";

  const srcset = (type: string): string => {
    let srcsetString: string = "";
    const srcsetParts = srcsetPart(type);

    srcsetParts.forEach((part) => {
      srcsetString += `${part[0]} ${part[1]}, `;
    });
    srcsetString = srcsetString.slice(0, -2);
    return srcsetString;
  };

  const srcsetPart = (type: string): string[][] => {
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
      subSet += `f-${type}`;

      srcsetArray.push([
        `${env.PUBLIC_IMAGE_KIT_URL}/${subSet}/${src}`,
        `${transformation[0]}w`,
      ]);
    });
    return srcsetArray;
  };

  // srcsetPart();
</script>

{#if loading == "eager"}
  <PreloadImageKit {sizes} srcset={srcset("avif")} />
{/if}

<picture>
  <source srcset={srcset("avif")} {sizes} type="image/avif" />
  <source srcset={srcset("webp")} {sizes} type="image/webp" />
  <img
    src={srcsetPart("jpeg")[0][0]}
    {width}
    {height}
    srcset={srcset("jpeg")}
    {sizes}
    {alt}
    {loading}
    class={classes}
  />
</picture>
