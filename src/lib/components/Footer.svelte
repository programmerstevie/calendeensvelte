<script>
  import { SignIn } from "@auth/sveltekit/components";
  import Container from "./Container.svelte";
</script>

<footer>
  <Container class="outer-container">
    <nav>
      <img src="/logo.png" alt="Company Logo" width="64" />
      <SignIn provider="resend">
        <span class="btn btn-secondary" slot="submitButton">Sign In with Resend</span>
      </SignIn>
    </nav>
  </Container>
</footer>
