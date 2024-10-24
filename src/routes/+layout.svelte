<script>
  import "../app.css";
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100..900&family=Quicksand:wght@300..700&family=Sriracha&display=swap"
    rel="stylesheet"
  />
</svelte:head>
{@render children?.()}
