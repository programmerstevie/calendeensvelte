<script>
  import { onMount } from "svelte";

  import { SignIn } from "@auth/sveltekit/components";

  import TagSEO from "$lib/components/TagSEO.svelte";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Pricing from "$lib/components/Pricing.svelte";
  import Footer from "$lib/components/Footer.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  onMount(() => {
    console.log(data.post);
  });
</script>

{#if data.session?.user}
  <div class="bg-info text-info-content font-bold">You are logged in</div>
{/if}

<TagSEO canonicalSlug="" />
<!-- <TagSchema /> -->
<main>
  <Header></Header>
  <Hero></Hero>
  <Pricing></Pricing>
  <Footer></Footer>
</main>

<div>
  <nav>
    <img src="/logo.png" alt="Company Logo" width="64" />
    <SignIn provider="resend">
      <span class="btn btn-secondary" slot="submitButton">Sign In with Resend</span>
    </SignIn>
  </nav>
</div>
