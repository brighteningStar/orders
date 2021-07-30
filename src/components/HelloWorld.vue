<template>
  <div class="order-parent">
    <div
      v-for="(orderText, orderType) in orderPanels"
      :key="orderType"
      class="order-panel"
    >
      <div class="order-cell">
        <orders :order-type="orderType" :panel-heading="orderText" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Orders from "./views/orders/Orders.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: { Orders },
  props: {},
  data() {
    return {
      orderPanels: {
        new_orders: "New Orders",
        in_progress: "In Progress",
        waiting: "Waiting For Buyers",
        completed: "Completed",
      },
    };
  },
});
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
