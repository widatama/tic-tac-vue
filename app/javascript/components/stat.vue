<template lang="jade">
div.stat-display
  span.stat-display__player.vue--green(class="stat-display__player--{{stat.value}}")
    | {{stat.player}}
  span.stat-display__label
    | {{stat.label}}
</template>

<script>
  export default {
    props: ["stat"]
  }
</script>
