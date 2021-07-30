<template>
  <div class="order-parent">
    <div class="order-panel">
      <div class="order-cell">
        <orders :order-type="'new_orders'" :panel-heading="'New Orders'" />
      </div>
    </div>
    <div class="order-panel">
      <div class="order-cell">
        <orders :order-type="'in_progress'" :panel-heading="'In Progress'" />
      </div>
    </div>
    <div class="order-panel">
      <div class="order-cell">
        <orders :order-type="'waiting'" :panel-heading="'Waiting For Buyers'" />
      </div>
    </div>
    <div class="order-panel">
      <div class="order-cell">
        <orders :order-type="'completed'" :panel-heading="'Completed'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Orders from "./views/orders/Orders.vue";

@Options({
  components: { Orders },
})
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.order-cell {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 90%;
  margin: 0 auto;
}

.order-parent {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin: 20px;
  height: 100vh;

  & .order-panel {
    background-color: #f4f6f8;
    flex: 300px;
    border-radius: 10px;
  }
}
</style>
