<template>
  <div class="card">
    <slot name="header" />
    <slot name="body" />
    <slot name="footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cards",
  props: {},
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 250px;
  background: #fff;
  margin: 0 auto;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
</style>
