<script lang="ts">
  export let label: string;
  export let id: string;
</script>

<div
  {id}
  class="bg-primary-default px-4 py-1 transition-all text-black-default group-hover:text-white group-hover:bg-primary-default bg-transparent duration-300 group-[&.active]:text-white  border-2 border-primary-default group-[&.active]:bg-primary-default"
>
  {label}
</div>
