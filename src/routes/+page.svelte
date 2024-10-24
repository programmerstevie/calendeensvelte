<script>
  import { onMount } from "svelte";

  import TagSEO from "$lib/components/TagSEO.svelte";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Pricing from "$lib/components/Pricing.svelte";
  import Footer from "$lib/components/Footer.svelte";

  /** @type {{data: import('./$types').PageData}} */
  let { data } = $props();

  onMount(() => {
    console.log(data.post);
  });
</script>

{#if data.session?.user}
  <div class="bg-info text-info-content font-bold">You are logged in</div>
{/if}

<TagSEO canonicalSlug="" />
<!-- <TagSchema /> -->
<main class="quicksand">
  <Header></Header>
  <Hero></Hero>
  <Pricing></Pricing>
  <Footer></Footer>
</main>
