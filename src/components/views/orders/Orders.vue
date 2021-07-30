<template>
  <span>
    <span class="order-status-heading">{{ panelHeading }}</span>
    <card v-for="(order, index) in fetchOrders" :key="index">
      <template #header>
        <div class="card-header">
          <button>
            <span class="fa fa-ellipsis-h" aria-hidden="true" />
          </button>
        </div>
      </template>
      <template #body>
        <div class="card-body">
          <div class="img-container">
            <img alt="Vue logo" :src="thumbnail(order.img)" />
          </div>
          <div class="order-info-container">
            <badge
              :text="order.status"
              :text-color="orderBadgeColor.color"
              :background-color="orderBadgeColor.bgColor"
            />
            <div class="order-time">
              <i class="fa fa-clock-o"></i
              ><span>{{ order.time_remaining }}</span>
            </div>
            <div class="order-budget">
              <span class="time-budget">{{ order.total_hours }} hrs</span>
              <span>|</span>
              <span class="price-budget">${{ order.price }}</span>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="card-footer">
          <div class="footer-area">
            <span class="view-order">View Order</span>
            <div class="profile-comment">
              <i class="fa fa-comment"></i>
              <img alt="Vue logo" src="../../../assets/placeholder.jpeg" />
            </div>
          </div>
        </div>
      </template>
    </card>
  </span>
</template>

<script lang="ts">
import { Order } from "@/Interfaces/Order.interface";
import Badge from "../../ui/Badge.vue";
import Card from "../../ui/Card.vue";
import { getOrdersByType } from "../../../services/OrderService";
import { OrderBadgeColor } from "../../../services/OrderService";
import { OrderBadge } from "@/Interfaces/OrderBadge.interface";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Orders",
  components: { Badge, Card },
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
  computed: {
    fetchOrders(): Order[] {
      return getOrdersByType(this.orderType);
    },

    orderBadgeColor(): OrderBadge {
      return OrderBadgeColor(this.orderType);
    },
  },

  methods: {
    thumbnail(img: string): string {
      return require("@/assets/" + img);
    },
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

function Prop() { throw new Error("Function not implemented."); }
