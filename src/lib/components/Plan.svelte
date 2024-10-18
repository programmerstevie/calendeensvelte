<script>
  import { twMerge } from "tailwind-merge";
  import Container from "./Container.svelte";
  import CalendeenIconTracedSvg from "../assets/svg/CalendeenIconTracedSVG.svelte";
  import IoMdCheckmarkCircleOutline from "svelte-icons/io/IoMdCheckmarkCircleOutline.svelte";
  import IoMdCloseCircleOutline from "svelte-icons/io/IoMdCloseCircleOutline.svelte";
  export let plan;
</script>

<Container
  class={twMerge(
    "min-w-sm w-full border rounded-lg shadow text-center bg-neutral text-neutral-content min-h-[400px]",
    "flex flex-col py-6 text-left",
    plan.isFeatured ? "border-accent border-2 indicator" : ""
  )}
>
  {#if plan.isFeatured}
    <span class="indicator-item indicator-center badge badge-secondary text-[0.7rem] font-semibold"
      >BETTER VALUE</span
    >
  {/if}
  <header>
    <h3 class="font-bold text-lg">{plan.name}</h3>
    <p class="mt-1 text-sm text-neutral-content-secondary">{plan.description}</p>
  </header>
  <section id="price" class="flex items-end mt-5">
    <span class="mb-1 text-lg line-through">${plan.priceAnchor}</span>
    <span class="text-5xl ml-2 font-bold">${plan.price}</span>
    <span class="ml-2 text-sm font-semibold text-neutral-content-secondary">USD</span>
  </section>
  <section id="features" class="mt-5 mb-6">
    <ul class="space-y-3">
      {#each plan.features as feature}
        <li class={twMerge("flex", feature.disabled ? "text-gray-500" : "")}>
          <div class="w-6 h-6">
            {#if feature.disabled}
              <IoMdCloseCircleOutline />
            {:else}
              <IoMdCheckmarkCircleOutline />
            {/if}
          </div>
          <span class="ml-2 font-semibold">
            {feature.name}
          </span>
        </li>
      {/each}
    </ul>
  </section>
  <footer class="mt-auto flex flex-col items-center">
    <button class="btn w-full btn-secondary text-primary-content px-6 flex">
      <CalendeenIconTracedSvg width="20px" height="20px" />
      <span class="font-bold">Get Calendeen</span>
    </button>
    <p class="mt-3 font-medium">No subscription.</p>
  </footer>
</Container>
