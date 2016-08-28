<template lang="pug">
div.stat-display( :class="statDisplaySizeClass")
  span.stat-display__player.vue--green( :class="statDisplayPlayerClass")
    | {{stat.player}}
  span.stat-display__label
    | {{stat.label}}
</template>

<script>
  export default {
    props: ["stat", "size"],
    computed: {
      statDisplayPlayerClass() {
        return "stat-display__player--" + this.stat.value;
      },
      statDisplaySizeClass() {
        return "stat-display--" + this.size
      }
    }
  }
</script>
