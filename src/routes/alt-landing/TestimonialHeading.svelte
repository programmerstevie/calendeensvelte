<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<h3 class="text-xl font-bold text-neutral-content">{@render children?.()}</h3>
