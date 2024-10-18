<script>
  import Container from "./Container.svelte";
  import HeroSVG from "$lib/assets/svg/HeroSVG.svelte";

  const DESCRIPTION =
    "The calendar app with all you need to schedule your life around your prayer times. Put your deen first.";
</script>

<Container class="lg:flex lg:min-h-[700px] bg-blue-100z items-start pt-20 lg:pt-44">
  <section class="lg:w-1/2 lg:pr-20 pt-6 bg-red-400">
    <h1
      class="lg:text-7xl text-[10vw] sm:text-6xl sm:leading-normal leading-snug font-bold text-base-content"
    >
      Don't let your plans steal your Khushu
    </h1>
    <p class="text-xl mt-12 text-base-content-secondary">{DESCRIPTION}</p>
    <button class="btn btn-primary mt-20 px-20 text-xl font-bold flex items-center mx-auto lg:mx-0">
      Get Calendeen
    </button>
  </section>
  <section class="lg:w-1/2 hidden lg:block bg-blue-400">
    <img src="https://placehold.co/600x400" alt="App Screenshot" class="mt-8" />
  </section>
</Container>

<style>
  h1 {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
    font-style: italic;
  }
</style>
