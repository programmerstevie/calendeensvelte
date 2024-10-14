<script>
  import Container from "./Container.svelte";
  import HeroSVG from "$lib/assets/svg/HeroSVG.svelte";

  const DESCRIPTION =
    "The calendar app with all you need to schedule your life around your prayer times. Put your deen first.";
</script>

<Container class="lg:flex lg:min-h-[700px] bg-blue-100z items-start pt-44">
  <section class="lg:w-1/2 pr-20 pt-6">
    <h1 class="text-7xl font-bold text-base-content sriracha">
      Don't let your plans steal your
      <br />
      Khushu
    </h1>
    <p class="text-xl mt-12 text-base-content-secondary">{DESCRIPTION}</p>
    <button class="btn btn-primary mt-20 px-20 text-xl font-bold flex items-center">
      Get Calendeen
    </button>
  </section>
  <section class="lg:w-1/2">
    <div class="h-[500px] flex items-center bg-primary justify-center">
      <HeroSVG width={400} height={400} class="animate-popup" />
    </div>
  </section>
</Container>
