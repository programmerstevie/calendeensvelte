<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<div class="sriracha text-base-content">
  {@render children?.()}
</div>
