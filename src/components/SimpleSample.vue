<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      default: '',
    },
  },
});
</script>

<template lang="pug">
div.text-lg {{ message }}
</template>
