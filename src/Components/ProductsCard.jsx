import React, { useState } from 'react';
import { Check } from "lucide-react";
import { toast } from 'react-toastify';
const ProductsCard = ({product,carts,setCarts}) => {
  const [isBuyNow,setBuyNow] = useState(false)

  const handleBuy = () => {
    setBuyNow(true)
    const isFound = carts.find(item => item.id === product.id)
    if(isFound){
      toast.error("Item already added")
      return
    }
    setCarts([...carts, product])
    toast.success("Item added")
  }
  return (
    <div className="relative w-full max-w-sm p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-6 right-6">
              <span className="bg-[#fff7ed] text-[#c2410c] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#ffedd5]">
                {product.tag}
              </span>
            </div>

            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 mb-6">
              <span className="text-3xl">{product.icon}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#101727] mb-3">
              {product.name}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex items-baseline mb-8">
              <span className="text-3xl font-bold text-[#101727]">
                ${product.price}
              </span>
              <span className="text-gray-400 font-medium ml-1">
                /{product.period}
              </span>
            </div>

            <ul className="space-y-4 mb-10">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-600 font-medium"
                >
                  <Check className="text-green-500 w-5 h-5 stroke-[3]" />
                  {feature}
                </li>
              ))}
            </ul>

            <button onClick={handleBuy} className="w-full py-4 bg-gradient-to-r from-[#6333ff] to-[#9933ff] text-white font-bold rounded-2xl hover:opacity-90 transition-opacity active:scale-[0.98]">
              {isBuyNow ? "Added to cart" : "Buy now"}
            </button>
          </div>
  );
};

export default ProductsCard;