<template>
  <span>
    <span class="order-status-heading">{{ panelHeading }}</span>
    <span v-for="(order, index) in orders" :key="index">
      <order-view
        :order="order"
        :index="index"
        :order-badge-color="badgeColors"
        @delete-order="deleteOrder"
      />
    </span>
  </span>
</template>

<script lang="ts">
import { Order } from "@/Interfaces/Order.interface";
import OrderView from "./Order.vue";
import { getOrdersByType } from "../../../services/OrderService";
import { OrderBadgeColor } from "../../../services/OrderService";
import { OrderBadge } from "@/Interfaces/OrderBadge.interface";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Orders",
  components: { OrderView },
  props: {
    orderType: {
      type: String,
      required: true,
    },
    panelHeading: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      orders: new Array<Order>(),
      badgeColors: {} as OrderBadge,
    };
  },
  methods: {
    fetchOrders(): void {
      this.orders = getOrdersByType(this.orderType);
    },
    orderBadgeColor(): void {
      this.badgeColors = OrderBadgeColor(this.orderType);
    },
    thumbnail(img: string): string {
      return require("@/assets/" + img);
    },
    deleteOrder(index: number) {
      this.orders = this.orders.filter((_, i) => i !== index);
    },
  },
  created(): void {
    this.fetchOrders();
    this.orderBadgeColor();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.order-status-heading {
  color: #7b7c7f;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  padding: 10px;
  text-align: left;
}

.card-header {
  display: flex;
  justify-content: flex-end;
  margin: 10px 8px;
  position: relative;

  & button {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 2px;

    & span {
      display: block;
      text-align: right;
      padding: 10px;
      font-size: 17px;
      color: #b3b4b8;
    }
  }

  & .drop-down {
    position: absolute;
    top: 27px;
    background: padding-box rgb(255, 255, 255);
    border: 1px solid rgb(204, 204, 204);
    right: auto;
    float: left;
    min-width: 90px;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    cursor: pointer;
  }
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 20px;
  margin-bottom: 20px;

  & .img-container {
    background: #fcfbfb;
    border: 1px solid #ccc;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 50px;
    }
  }

  & .order-info-container {
    line-height: 2.3em;

    & .order-badge {
      margin-right: -25px;
    }

    & .order-time {
      color: #a5a5a9;
      margin-right: -25px;
      & i {
        margin-right: 10px;
      }

      & span {
        font-weight: 500;
      }
    }

    & .order-budget {
      display: flex;
      justify-content: space-between;
      color: #a5a5a9;
      font-size: 20px;

      & .time-budget {
        margin-right: 10px;
      }

      & .price-budget {
        font-weight: 600;
        color: #434447;
        margin-left: 10px;
      }
    }
  }
}

.card-footer {
  border-top: 1px solid #a5a5a9;

  & .footer-area {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px;
    color: #9a9a9c;

    & .view-order {
      font-weight: 500;
      font-size: 18px;
    }

    & i {
      margin-right: 15px;
      font-size: 30px;
      vertical-align: top;
    }

    & img {
      border-radius: 50%;
      width: 30px;
    }
  }
}
</style>
