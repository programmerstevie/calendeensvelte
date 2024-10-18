<script>
  import Container from "./Container.svelte";
  import HeroSVG from "$lib/assets/svg/HeroSVG.svelte";

  const DESCRIPTION =
    "The calendar app with all you need to schedule your life around your prayer times. Put your deen first.";
</script>

<Container class="lg:flex -bg-green-100- mt-20 lg:mt-20 outer-container">
  <section class="lg:w-1/2 lg:pr-20 pt-6 -bg-red-400-">
    <h1
      class="lg:text-7xl text-[10vw] sm:text-6xl sm:leading-normal leading-snug font-bold text-base-content"
    >
      Don't let your plans steal your Khushu
    </h1>
    <p class="text-xl mt-6 font-semibold text-base-content-secondary">{DESCRIPTION}</p>
    <button class="btn btn-secondary mt-20 px-20 text-xl font-bold flex items-center mx-auto lg:mx-0 animate-none">
      Get Calendeen
    </button>
  </section>
  <section class="lg:w-1/2 hidden lg:flex items-center justify-center -bg-blue-400- h-auto">
    <img src="https://placehold.co/600x400" alt="App Screenshot" width="600px" height="400px" />
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
