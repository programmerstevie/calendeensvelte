<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<div class="bg-neutral shadow-lg p-8 rounded-xl text-center relative">
  <div
    class="absolute w-0 h-0 left-1/2 bottom-[-16px] transform -translate-x-1/2 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-neutral"
  ></div>
  {@render children?.()}
</div>
