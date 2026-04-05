import { BrushCleaning } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful")
  };
  const handleDelete = (item) => {
    const filteredArr = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArr);
    toast.success("Item Removed");
  };
  return (
    <div className="p-10 w-11/12 mx-auto shadow-sm rounded-lg">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      {carts.length === 0 ? (
        <p className=" font-bold text-center text-2xl bg-purple-100 ">
          Cart is Empty
        </p>
      ) : (
        <>
          <div className="p-3">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex p-2  gap-8 rounded-lg mb-4 bg-[#F9FAFC]"
              >
                <div>
                  <span className="text-5xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#101727] mb-3">
                    {item.name}
                  </h3>
                  <div>$ {item.price}</div>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn font-bold  text-red-400 mt-3"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between">
              <div className="font-bold text-xl">Total</div>
              <div className="font-bold text-xl">$ {totalPrice}</div>
            </div>
            <button
              onClick={handlePayment}
              className=" w-full mt-6 btn btn-sm md:btn-md bg-gradient-to-r from-[#6333ff] to-[#9933ff] hover:opacity-90 text-white font-bold rounded-full border-none px-3 sm:px-6"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
