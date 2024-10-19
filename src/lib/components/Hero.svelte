<script>
  import { twMerge } from "tailwind-merge";
  import Container from "./Container.svelte";

  const sale = false;
  const num_customers = 1000;
</script>

<Container class="lg:mt-20 outer-container text-center lg:text-left">
  <div class="lg:flex">
    <section class="lg:w-1/2 lg:pr-20 pt-6">
      <h1
        class="xl:text-6xl text-[10vw] lg:text-5xl sm:text-4xl sm:leading-normal leading-snug font-bold text-base-content animate-popup"
      >
        Don't let your <br class="sm:hidden" /> plans <br class="hidden sm:inline lg:hidden" /><span
          class="underline">steal</span
        >
        <span class="dafont uppercase text-base-200 relative ml-2 lg:ml-0 lg:block lg:mt-2">
          <div class="inline-block animate-bounce-realistics text-nowrap">your Khushu'</div>
          <span
            class="absolute h-[1.1em] w-[8em] -left-4 sm:left-[-10px] lg:-left-4 top-[8px] sm:top-[5px] lg:top-0 bg-base-content rotate-[-1deg] -z-10"
          ></span>
        </span>
      </h1>
      <p class="text-xl mt-12 font-semibold text-base-content-secondary">
        The calendar app with all you need to schedule your life around your prayer times.
      </p>
      <button
        class="btn btn-primary lg:mt-16 mt-10 btn-wide h-14 text-xl font-bold flex items-center mx-auto lg:mx-0"
      >
        Get Calendeen
      </button>
      {#if sale}
        <div class="mt-10 text-xl text-secondary-content">
          Limited Time Sale! 20% off for the first 100 customers (13 left)
        </div>
      {/if}
      <section class="flex w-fit mx-auto lg:mx-0 mt-16 bg-red-500s">
        <div class="avatar-group -space-x-6">
          {#each [1, 1, 1, 1, 1] as _}
            <div class="avatar">
              <div class="w-12">
                <img
                  class="bg-neutral"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/muslim-man-illustration-download-in-svg-png-gif-file-formats--arabic-male-islamic-faceless-character-of-pack-people-illustrations-10332654.png?f=webp"
                  alt="av"
                />
              </div>
            </div>
          {/each}
        </div>
        <div class="ml-7">
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 hover:cursor-default bg-secondary"
              disabled
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 hover:cursor-default bg-secondary"
              disabled
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 hover:cursor-default bg-secondary"
              disabled
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 hover:cursor-default bg-secondary"
              disabled
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 hover:cursor-default bg-secondary"
              disabled
              checked="checked"
            />
          </div>
          <div class="font-bold">
            <span class="font-bold bg-primary text-primary-content px-1">{num_customers}</span> muslims
            plan with Calendeen.
          </div>
        </div>
      </section>
    </section>
    <section class="lg:w-1/2 flex mt-20 lg:mt-0 items-start justify-center h-auto">
      <img src="https://placehold.co/600x600" alt="App Screenshot" width="600px" height="600px" />
    </section>
  </div>
  <section class="h-[200px]"></section>
</Container>

<style>
  .dafont {
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
