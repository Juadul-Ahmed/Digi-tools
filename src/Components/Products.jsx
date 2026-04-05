import React, { use} from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);

 
  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="font-extrabold text-4xl mb-4">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* tab */}
      
      {/* tab */}

      <div className="mt-10 w-11/12 mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Products;
