<template lang="pug">
.stat-display( :class="statDisplaySizeClass")
  span.stat-display__player.vue--green( :class="statDisplayPlayerClass")
    | {{stat.player}}
  span.stat-display__label( :class="statLabelThin")
    | {{stat.label}}
</template>

<script>
  export default {
    name: 'Stat',
    props: {
      stat: {
        type: Object,
        default() {
          return {};
        },
      },
      size: {
        type: String,
        default: 'normal',
      }
    },
    computed: {
      statDisplayPlayerClass() {
        return `stat-display__player--${this.stat.value}`;
      },
      statDisplaySizeClass() {
        return `stat-display--${this.size}`;
      },
      statLabelThin() {
        if (this.size === 'large') {
          return 'text-thin';
        }

        return '';
      }
    },
  };
</script>
