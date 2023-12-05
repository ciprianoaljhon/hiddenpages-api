import React, { useState } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      product: "Product 1",
      quantity: 2,
      receivedDate: "2023-11-29",
      deliveryAddress: "123 Main St, City, State",
    },
    {
      id: 2,
      product: "Product 2",
      quantity: 1,
      receivedDate: "2023-11-30",
      deliveryAddress: "456 Elm St, City, State",
    },
  ]);

  return (
    <div className="w-full h-max ">
      <div className="container h-screen w-full items-center justify-center">
        <h1>No Orders</h1>
      </div>
    </div>
  );
};

export default OrderHistory;
