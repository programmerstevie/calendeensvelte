<script>
  import { SignIn } from "@auth/sveltekit/components";
  import Container from "./Container.svelte";
</script>

<footer>
  <Container class="outer-container">
    <nav>
      <img src="/logo.png" alt="Company Logo" width="64" />
      <SignIn provider="resend">
        {#snippet submitButton()}
          <span class="btn btn-secondary">Sign In with Resend</span>
        {/snippet}
      </SignIn>
    </nav>
  </Container>
</footer>
