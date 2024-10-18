<script>
  import { twMerge } from "tailwind-merge";

  export let plan;
</script>

<div
  class={twMerge(
    "min-w-sm lg:w-[512px] w-full border rounded-lg shadow p-6 text-center",
    plan.isFeatured ? "border-warning" : ""
  )}
>
  <p class="text-3xl font-bold">${plan.price}</p>
  <p class="mt-2 mb-4 line-through">${plan.priceAnchor}</p>
  <button class="btn btn-primary rounded-full px-6">Get Started</button>
  <p class="mt-4 text-sm">{plan.description}</p>
</div>
