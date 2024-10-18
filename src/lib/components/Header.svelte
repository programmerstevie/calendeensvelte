<script>
  import Container from "./Container.svelte";
  import config from "@/config";
</script>

<header class="bg-base-100 h-24">
  <nav class="h-full navbar">
    <Container class="h-full">
      <a href="#top" class="flex items-center flex-1">
        <img src="/logo.png" width={50} height={50} alt="logo" class="animate-shake-center"/>
        <span class="ml-5 text-3xl font-bold">{config.appName}</span>
      </a>
      <ul class="ml-28 space-x-12 font-bold navbar-end hidden lg:flex">
        <li class="btn btn-ghost">
          <a href="#pricing">Pricing</a>
        </li>
        <li class="btn btn-ghost">
          <a href="#reviews">Reviews</a>
        </li>
        <li class="btn btn-ghost">
          <a href="/account">Account</a>
        </li>
      </ul>
      <div class="flex-none lg:hidden">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </Container>
  </nav>
</header>
