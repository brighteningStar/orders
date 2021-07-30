<template>
  <div class="card">
    <slot name="header" />
    <slot name="body" />
    <slot name="footer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Card extends Vue {}
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
