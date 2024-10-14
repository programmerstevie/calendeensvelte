<script>
  import Container from "./Container.svelte";
  import config from "@/config";
</script>

<header class="bg-base-300 h-24">
  <nav class="h-full">
    <Container class="flex items-center h-full">
      <a href="#top" class="flex items-center">
        <!-- <img src="/logo.png" width={50} height={50} alt="logo" /> -->
        <span class="ml-5 text-3xl font-bold">{config.appName}</span>
      </a>
      <ul class="flex ml-28 space-x-12 font-extralight text-2xl">
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
      </ul>
    </Container>
  </nav>
</header>
