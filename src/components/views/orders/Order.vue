<template>
  <card>
    <template #header>
      <div class="card-header">
        <button @click="showDropDown = !showDropDown">
          <span class="fa fa-ellipsis-h" aria-hidden="true" />
        </button>
        <div v-if="showDropDown" class="drop-down">
          <span @click="deleteOrder">Delete</span>
        </div>
      </div>
    </template>
    <template #body>
      <div class="card-body">
        <div class="img-container">
          <img alt="Vue logo" :src="thumbnail(order.img)" />
        </div>
        <div class="order-info-container">
          <span>
            <badge
              :text="order.status"
              :text-color="orderBadgeColor.color"
              :background-color="orderBadgeColor.bgColor"
            />
          </span>
          <div class="order-time">
            <i class="fa fa-clock-o"></i><span>{{ order.time_remaining }}</span>
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
        <hr />
        <div class="footer-area">
          <span class="view-order">View Order</span>
          <div class="profile-comment">
            <i class="fa fa-comment"></i>
            <img alt="Vue logo" :src="thumbnail('placeholder.jpeg')" />
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import Badge from "../../ui/Badge.vue";
import Card from "../../ui/Card.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderView",
  components: { Badge, Card },
  props: {
    order: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    orderBadgeColor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDropDown: false,
    };
  },

  computed: {},

  methods: {
    thumbnail(img: string): string {
      return require("@/assets/" + img);
    },
    deleteOrder() {
      this.$emit("delete-order", this.index);
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
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & .order-time {
      color: #a5a5a9;
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
  & hr {
    border: 0.5px solid #a5a5a9;
  }

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
