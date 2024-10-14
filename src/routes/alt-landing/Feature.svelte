<script>
  export let title;
  export let text;
  export let icon;
</script>

<div class="flex flex-col items-center">
  <div class="w-16 h-16 flex items-center justify-center text-base-content bg-base-200 rounded-full mb-4">
    <div class="w-10 h-10 text-blue-500">
      <svelte:component this={icon} />
    </div>
  </div>
  <h3 class="font-semibold text-lg">{title}</h3>
  <p class="text-base-content/80">{text}</p>
</div>
