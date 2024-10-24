<script>
  const DAYS_OF_WEEK = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  const FIRST_COL_WIDTH = "70px";

  function GridColumn({ col }) {
    return Array.from({ length: 24 }, (_, hour) => ({
      gridColumn: `${col} / span 1`,
      gridRow: `${hour + 1} / span 1`
    }));
  }
</script>

<div class="flex w-full">
  <aside class="w-40">
    <div class="border p-2">
      <h2>Calendar</h2>
    </div>
  </aside>
  <section class="grow">
    <div
      class="grid gap-x-1"
      style={`grid-template-columns: ${FIRST_COL_WIDTH} repeat(7, 1fr); grid-template-rows: 1fr; gap: 1px; border: 1px solid rgba(0, 0, 0, 0.12);`}
    >
      <div></div>
      {#each DAYS_OF_WEEK as day, ix}
        <div
          class="border p-2 capitalize"
          style={`grid-column: ${ix + 2} / span 1; grid-row: 1 / span 1;`}
        >
          {day}
        </div>
      {/each}
    </div>

    <div class="overflow-y-auto scrollbar-hide" style="height: calc(100vh - 44px);">
      <div
        class="grid bg-white"
        style={`grid-template-columns: ${FIRST_COL_WIDTH} repeat(7, 1fr); grid-template-rows: repeat(24, 1fr); gap: 1px; border: 1px solid rgba(0, 0, 0, 0.12);`}
      >
        {#each Array(22) as _, h}
          <div
            class="border p-2 text-center h-16"
            style={`grid-column: 1 / span 1; grid-row: ${h + 2} / span 1;`}
          >
            hello
          </div>
        {/each}
        {#each DAYS_OF_WEEK as _, ix}
          {#each GridColumn({ col: ix + 2 }) as gridStyle, hour}
            <div
              class="border p-2 text-center h-16"
              style={`grid-column: ${gridStyle.gridColumn}; grid-row: ${gridStyle.gridRow};`}
            ></div>
          {/each}
        {/each}
      </div>
    </div>
  </section>
</div>
