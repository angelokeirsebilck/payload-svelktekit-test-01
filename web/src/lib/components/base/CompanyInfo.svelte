<script lang="ts">
  import { page } from "$app/stores";
  import { trans } from "$lib/translations/translations";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { afterUpdate } from "svelte";
  import { staggerAnimationFromTo } from "$lib/utils/staggerAnimationFromTo";

  let contactInfo: any;
  afterUpdate(async () => {
    gsap.registerPlugin(ScrollTrigger);
    staggerAnimationFromTo(contactInfo);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  });

  //@ts-ignore
  $: visutUsString = trans[$page.data.locale]["visitUs"];
  //@ts-ignore
  $: contactUsString = trans[$page.data.locale]["contactUs"];
</script>

<div class="grid @xl:grid-cols-2" bind:this={contactInfo}>
  <div class="flex flex-col mb-8 @xl:mb-0">
    <div class="text-lg font-semibold tracking-[2px] mb-2 uppercase">
      {contactUsString}
    </div>
    <a
      href={`tel:${$page.data.companyInfo.tel}`}
      class="hover:text-secondary-default duration-300 transition-colors w-fit"
    >
      <span class="mr-2 inline-block font-bold text-secondary-default">T</span>
      {$page.data.companyInfo.tel}
    </a>
    <a
      href={`email:${$page.data.companyInfo.email}`}
      class="hover:text-secondary-default duration-300 transition-colors inline-block w-fit"
    >
      <span class="mr-2 inline-block font-bold text-secondary-default">E</span>
      {$page.data.companyInfo.email}
    </a>
  </div>
  <div class="flex flex-col">
    <div class="text-lg font-semibold tracking-[2px] mb-2 uppercase">
      {visutUsString}
    </div>
    <a
      target="_blank"
      rel="nofollow noreferrer"
      href={`http://maps.google.com/?q=${$page.data.companyInfo.addressLine1},${$page.data.companyInfo.addressLine2},${$page.data.companyInfo.addressLine3}`}
      class="hover:text-secondary-default duration-300 transition-colors w-fit"
    >
      {$page.data.companyInfo.addressLine1} <br />
      {$page.data.companyInfo.addressLine2} <br />
      {$page.data.companyInfo.addressLine3}
    </a>
  </div>
</div>
