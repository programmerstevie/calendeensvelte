<script>
  import config from "@/config";
  import Container from "./Container.svelte";
  import Plan from "./Plan.svelte";
</script>

<Container class="outer-container">
  <div class="flex justify-center gap-10 lg:flex-row flex-col">
    {#each config.stripe.plans as plan}
      <Plan {plan} />
    {/each}
  </div>
</Container>
