<script>
  import { onMount } from "svelte";
  import { twMerge } from "tailwind-merge";

  // Array to hold notification data (image sources)
  let notifications = $state([]);
  const notification_data = [
    {
      icon_src: "3rd_party_logo_1.png",
      title: "Maghrib at 6:48 PM",
      description: "View Prayer times",
      time: "2h ago"
    },
    {
      icon_src: "3rd_party_logo_1.png",
      title: "Isha at 7:48 PM",
      description: "View Prayer times",
      time: "1h ago"
    },
    {
      icon_src: "3rd_party_logo_2.png",
      title: "Mom",
      description: "Did you pray?",
      time: "2m ago"
    },
    {
      icon_src: "3rd_party_logo_2.png",
      title: "Abdullah",
      description: "Assalaamu 3alaykum yaa akhi I didn't see you at the masjid...",
      time: "now"
    }
  ];

  // Function to add a new notification
  function addNotification(ix) {
    // Get the current largest ID in the notifications array
    const largestId = notifications.length > 0 ? Math.max(...notifications.map((n) => n.id)) : 0;

    // Add a new notification
    notifications = [
      ...notifications,
      {
        ...notification_data[ix],
        id: largestId + 1
      }
    ];

    // Automatically remove the notification after the specified time
    setTimeout(() => {
      // Get the current smallest ID in the notifications array
      const smallestId =
        notifications.length > 0 ? Math.min(...notifications.map((n) => n.id)) : null;
      if (smallestId !== null) {
        // Filter out the notification with the smallest ID
        notifications = notifications.filter((n) => n.id !== smallestId);
      }
    }, 13000); // This is 15 seconds (adjust as needed)
  }

  // Add a new notification every 2 seconds for demonstration, stopping after 3 notifications
  onMount(() => {
    let n = 0;
    let cb = setInterval(() => {
      addNotification(n);
      n++;

      if (n === notification_data.length) clearInterval(cb);
    }, 2000);
  });
</script>

<div
  class="fixed top-3 h-16 w-[100vw] flex flex-col justify-start items-center z-50 pointer-events-none space-y-2"
>
  {#each notifications as notif_data (notif_data.id)}
    {@render notif(notif_data)}
  {/each}
</div>

{#snippet notif(data)}
  <div
    alt="urgent notification"
    class={twMerge(
      "sm:h-full w-[95vw] relative right-[1vw] sm:right-5 animate-slideDown opacity-0",
      "bg-[#D9D9D9] rounded-xl shadow-simple p-2 box-content sm:w-[318px] flex items-center",
      "encode-sans text-[11.5px] pointer-events-auto"
    )}
    style={"animation-delay: 3s"}
  >
    <img
      src={data.icon_src}
      alt="urgent notification"
      class="h-[45px] w-[45px] object-cover rounded-md"
    />
    <section class="pl-5 h-full flex flex-col justify-between py-[4px] grow">
      <header class="font-bold text-black">{data.title}</header>
      <p class="font-semibold text-black opacity-60">{data.description}</p>
    </section>
    <section class="font-bold text-black opacity-40 h-full self-start pr-[4px]">
      {data.time}
    </section>
  </div>
{/snippet}
