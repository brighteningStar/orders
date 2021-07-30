<template>
  <span :style="cssVars" class="order-badge">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Badge",
  props: {
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssVars(): unknown {
      // there is issue currently with typescript object return type
      return {
        "--bg-color": this.backgroundColor,
        "--text-color": this.textColor,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.order-badge {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 13px;
  border-radius: 20px;
  padding: 3px 17px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
