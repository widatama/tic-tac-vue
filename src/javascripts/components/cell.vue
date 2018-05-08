<template lang="pug">
.cell.vue--green( :class="cellValueClass", @click="handleClick")
  | {{cellDisplay}}
</template>

<script>
  import { displayXO } from '../modules/helper/display';

  export default {
    name: 'Cell',
    props: {
      cell: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    computed: {
      cellValueClass() {
        if (this.cell.value) {
          return `cell--${this.cell.value}`;
        }

        return '';
      },
      cellDisplay() {
        return displayXO(this.cell.value);
      },
    },
    methods: {
      handleClick() {
        if (this.cell.value === '') {
          this.$store.dispatch('playerMoves', { cellPosition: this.cell.pos });
        }
      },
    },
  };
</script>
