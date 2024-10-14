<script>
  export let title;
  export let text;
  export let icon;
</script>

<div class="flex flex-col items-center">
  <div class="w-16 h-16 flex items-center justify-center text-white bg-gray-100 rounded-full mb-4">
    <svelte:component this={icon} class="w-10 h-10 text-blue-500" />
  </div>
  <h3 class="font-semibold text-lg">{title}</h3>
  <p class="text-gray-600">{text}</p>
</div>
