import React from "react";

const Cart = ({ carts }) => {
  console.log(carts);
  return (
    <div className="p-10 w-11/12 mx-auto shadow-sm rounded-lg">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="p-3">
        {carts.map((item) => (
        <div key={item.id} className="flex  gap-8 rounded-lg mb-4 bg-[#F9FAFC]">
          <div>
            <span className="text-5xl">{item.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#101727] mb-3">
              {item.name}
            </h3>
            <div>$ {item.price}</div>
          </div>
        </div>
      ))
      }
      <div className="flex justify-between">
        <div className="font-bold text-xl">Total</div>
        <div className="font-bold text-xl">0</div>
      </div>
      </div>
      
    </div>
  );
};

export default Cart;
