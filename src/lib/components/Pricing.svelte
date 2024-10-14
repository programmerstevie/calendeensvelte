<script>
  import config from "@/config";
  import { twMerge } from "tailwind-merge";
  import Container from "./Container.svelte";
</script>

<Container>
  <div>This is Pricing</div>
  <div class="flex justify-center gap-x-10 lg:flex-row flex-col">
    {#each config.stripe.plans as plan}
      <div
        class={twMerge(
          "min-w-sm lg:w-[512px] w-full border rounded-lg shadow p-6 text-center",
          plan.isFeatured ? "border-primary" : ""
        )}
      >
        <p class="text-3xl font-bold">${plan.price}</p>
        <p class="mt-2 mb-4 line-through">${plan.priceAnchor}</p>
        <button class="btn btn-primary rounded-full px-6">Get Started</button>
        <p class="mt-4 text-sm">{plan.description}</p>
      </div>
    {/each}
  </div>
</Container>
