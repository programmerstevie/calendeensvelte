<script>
  import config from "@/config";
  import Container from "./Container.svelte";
  import Plan from "./Plan.svelte";
</script>

<Container>
  <div>This is Pricing</div>
  <div class="flex justify-center gap-x-10 lg:flex-row flex-col">
    {#each config.stripe.plans as plan}
      <Plan {plan} />
    {/each}
  </div>
</Container>
