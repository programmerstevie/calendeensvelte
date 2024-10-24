<script>
  import Feature from "./Feature.svelte";
  import Testimonial from "./Testimonial.svelte";
  import TestimonialContent from "./TestimonialContent.svelte";
  import TestimonialHeading from "./TestimonialHeading.svelte";
  import TestimonialText from "./TestimonialText.svelte";
  import TestimonialAvatar from "./TestimonialAvatar.svelte";

  import FaCalendar from "svelte-icons/fa/FaCalendar.svelte"; // Use Svelte Icons
  import FaBell from "svelte-icons/fa/FaBell.svelte";
  import FaSync from "svelte-icons/fa/FaSync.svelte";
  import Price from "./Price.svelte";
</script>

<div class="font-sans text-xl text-center">
  <!-- Fixed Navbar -->
  <div class="fixed top-0 left-0 right-0 bg-base-100 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <img src="https://placehold.co/50" alt="Logo" class="mr-4" />
        <h1 class="text-xl font-bold">PrayerSync</h1>
      </div>
      <div class="flex space-x-4">
        <a href="#Features" class="link link-hover">Features</a>
        <a href="#Testimonials" class="link link-hover">Testimonials</a>
        <a href="#Pricing" class="link link-hover">Pricing</a>
      </div>
    </div>
  </div>

  <!-- Hero Section -->
  <div class="min-h-screen bg-gradient-to-b from-base-200 to-base-100 pt-24">
    <div class="max-w-7xl mx-auto p-8 text-center">
      <h1 class="text-5xl font-bold mb-6">Sync Your Prayers with Your Life</h1>
      <p class="text-xl mb-6">
        Never miss a prayer again. PrayerSync seamlessly integrates Muslim prayer times into your
        Google Calendar.
      </p>
      <button class="btn btn-primary rounded-full px-6">Get Started</button>
      <img src="https://placehold.co/600x400" alt="App Screenshot" class="mt-8" />
    </div>
  </div>

  <!-- Features Section -->
  <div class="max-w-7xl mx-auto p-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <Feature
        icon={FaCalendar}
        title="Automatic Syncing"
        text="Prayer times are automatically synced with your Google Calendar based on your location."
      ></Feature>
      <Feature
        icon={FaBell}
        title="Customizable Reminders"
        text="Set personalized reminders to ensure you never miss a prayer."
      />
      <Feature
        icon={FaSync}
        title="Real-time Updates"
        text="Prayer times are updated in real-time based on your current location."
      />
    </div>
  </div>

  <!-- Testimonials Section -->
  <div class="bg-base-200 py-16">
    <div class="max-w-7xl mx-auto p-8">
      <h2 class="text-4xl font-bold mb-8">What Our Users Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Life-changing App</TestimonialHeading>
            <TestimonialText>
              PrayerSync has transformed how I manage my daily prayers. It's a must-have for every
              Muslim professional.
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src="https://placehold.co/150"
            name="Ahmed S."
            title="Software Engineer"
          />
        </Testimonial>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Seamless Integration</TestimonialHeading>
            <TestimonialText>
              The way PrayerSync integrates with Google Calendar is simply brilliant. It's made my
              life so much easier.
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src="https://placehold.co/150"
            name="Fatima R."
            title="Business Analyst"
          />
        </Testimonial>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Highly Recommend</TestimonialHeading>
            <TestimonialText>
              As a busy student, PrayerSync helps me stay on top of my prayers without compromising
              my studies.
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src="https://placehold.co/150"
            name="Omar K."
            title="Graduate Student"
          />
        </Testimonial>
      </div>
    </div>
  </div>

  <!-- Pricing Section -->
  <div class="max-w-7xl mx-auto p-8">
    <h2 class="text-4xl font-bold mb-8">Simple Pricing</h2>
    <ul>
      <li>
        <Price />
      </li>
      <li>
        <Price />
      </li>
    </ul>
  </div>

  <!-- Final CTA -->
  <div class="max-w-7xl mx-auto p-8 text-center">
    <h2 class="text-4xl font-bold mb-8">Ready to Sync Your Prayers?</h2>
    <button class="btn btn-primary rounded-full px-6 btn-lg">Get Started Now</button>
  </div>
</div>
