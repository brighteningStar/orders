import { Order } from "@/Interfaces/Order.interface";
import { OrderBadge } from "@/Interfaces/OrderBadge.interface";

const getOrdersByType = (orderType: string | undefined): Order[] => {
  if (orderType === "new_orders") {
    const orders: Order[] = [
      {
        img: "logo.png",
        status: "New Order",
        price: 200,
        total_hours: "20",
        time_remaining: "4 days left",
      },
      {
        img: "logo.png",
        status: "New Order",
        price: 200,
        total_hours: "20",
        time_remaining: "10 days left",
      },
    ];
    return orders;
  }

  if (orderType === "in_progress") {
    const orders: Order[] = [
      {
        img: "logo.png",
        status: "In Progress",
        price: 500,
        total_hours: "20",
        time_remaining: "4 days left",
      },
      {
        img: "logo.png",
        status: "In Progress",
        price: 320,
        total_hours: "100",
        time_remaining: "50 days left",
      },
      {
        img: "logo.png",
        status: "In Progress",
        price: 600,
        total_hours: "100",
        time_remaining: "50 days left",
      },
    ];
    return orders;
  }

  if (orderType === "waiting") {
    const orders: Order[] = [
      {
        img: "logo.png",
        status: "Delivered",
        price: 500,
        total_hours: "20",
        time_remaining: "4 days left",
      },
    ];
    return orders;
  }

  const orders: Order[] = [
    {
      img: "logo.png",
      status: "Completed",
      price: 500,
      total_hours: "20",
      time_remaining: "4 days left",
    },
    {
      img: "logo.png",
      status: "Completed",
      price: 320,
      total_hours: "100",
      time_remaining: "50 days left",
    },
    {
      img: "logo.png",
      status: "Completed",
      price: 600,
      total_hours: "100",
      time_remaining: "50 days left",
    },
  ];
  return orders;
};

const OrderBadgeColor = (orderType: string | undefined): OrderBadge => {
  if (orderType === "new_orders") {
    const badgeColor: OrderBadge = {
      color: "#7b5e41",
      bgColor: "#f9ebd0",
    };

    return badgeColor;
  }

  if (orderType === "in_progress") {
    const badgeColor: OrderBadge = {
      color: "#5e6888",
      bgColor: "#d5defa",
    };

    return badgeColor;
  }

  if (orderType === "waiting") {
    const badgeColor: OrderBadge = {
      color: "#745367",
      bgColor: "#f4d6e9",
    };

    return badgeColor;
  }

  const badgeColor: OrderBadge = {
    color: "#5a6f61",
    bgColor: "#d6f3e1",
  };

  return badgeColor;
};
export { getOrdersByType, OrderBadgeColor };
