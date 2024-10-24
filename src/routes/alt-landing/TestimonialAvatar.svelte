<script>
  /** @type {{src: any, name: any, title: any}} */
  let { src, name, title } = $props();
</script>

<div class="flex flex-col items-center mt-8">
  <img class="w-16 h-16 rounded-full mb-2" {src} alt={name} />
  <div class="text-center">
    <p class="font-semibold">{name}</p>
    <p class="text-sm text-gray-600 dark:text-gray-400">{title}</p>
  </div>
</div>
