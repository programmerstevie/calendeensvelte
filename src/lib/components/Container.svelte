<script>
  import { twMerge } from "tailwind-merge";

  let className = "";
  export { className as class };
</script>

<div class={twMerge("container mx-auto px-12", className)}>
  <slot />
</div>
