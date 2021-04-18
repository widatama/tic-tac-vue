<template lang="pug">
.w-full.grid.grid-cols-3.grid-rows-3.justify-items-stretch(class="h-full md:h-full lg:h-3/5")
  Cell(
    v-for="(cell, idx) in cells"
    :cell="cell"
    :key="idx"
  )
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Cell from './cell.vue';

export default defineComponent({
  name: 'Board',
  components: {
    Cell,
  },
  props: {
    cells: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>
