import { useState } from "react"
import BannerSection from "./Components/BannerSection"
import Cart from "./Components/Cart"
import Count from "./Components/Count"
import NavBar from "./Components/NavBar"
import Products from "./Components/Products"


const getProducts = async () => {
  const res = await fetch('/products.json')
  return res.json()
}

const productPromise = getProducts() 

 

function App() {
  
const [activeTab,setActiveTab] = useState ("product")
const [carts,setCarts] = useState([])

  return (
    <>
   <NavBar/>
   <BannerSection/>
   <Count/>
   <div className="flex justify-center tabs tabs-box bg-transparent mt-10">
        <label className="cursor-pointer">
          <input
            type="radio"
            name="my_tabs_1"
            className="peer hidden" 
            aria-label="Products"
            defaultChecked
            onClick={()=> setActiveTab("product")}
          />
          <div
            className="px-8 py-2.5 rounded-full font-bold text-gray-500 transition-all 
      peer-checked:bg-gradient-to-r peer-checked:from-[#6333ff] peer-checked:to-[#9933ff] 
      peer-checked:text-white  hover:text-[#6333ff]"
          >
            Products
          </div>
        </label>

        <label className="cursor-pointer ml-2">
          <input
            type="radio"
            name="my_tabs_1"
            className="peer hidden"
            aria-label= "Cart"
            onClick={()=> setActiveTab("cart")}
          />
          <div
           className="px-8 py-2.5 rounded-full font-bold text-gray-500 transition-all 
  peer-checked:bg-gradient-to-r peer-checked:from-[#6333ff] peer-checked:to-[#9933ff] 
  peer-checked:text-white hover:text-[#6333ff]"
          >
            Cart {carts.length > 0 ? `(${carts.length})` : ""}
          </div>
        </label>
      </div>
  {activeTab === "product" && <Products productPromise={productPromise} carts={carts} setCarts={setCarts} />}

  {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
    </>
  )
}

export default App
