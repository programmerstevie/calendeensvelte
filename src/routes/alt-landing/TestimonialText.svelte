<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<p class="text-center text-neutral-content/80 text-sm">{@render children?.()}</p>
