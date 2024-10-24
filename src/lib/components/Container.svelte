<script>
  import { twMerge } from "tailwind-merge";

  /** @type {{class?: string, children?: import('svelte').Snippet}} */
  let { class: className = "", children } = $props();
</script>

<div class={twMerge("container mx-auto px-12", className)}>
  {@render children?.()}
</div>
