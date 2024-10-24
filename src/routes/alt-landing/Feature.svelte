<script>
  /** @type {{title: any, text: any, icon: any}} */
  let { title, text, icon } = $props();

  const SvelteComponent = $derived(icon);
</script>

<div class="flex flex-col items-center">
  <div
    class="w-16 h-16 flex items-center justify-center text-base-content bg-base-200 rounded-full mb-4"
  >
    <div class="w-10 h-10 text-blue-500">
      <SvelteComponent />
    </div>
  </div>
  <h3 class="font-semibold text-lg">{title}</h3>
  <p class="text-base-content/80">{text}</p>
</div>
