import BannerSection from "./Components/BannerSection"
import Count from "./Components/Count"
import NavBar from "./Components/NavBar"
import Products from "./Components/Products"


const getProducts = async () => {
  const res = await fetch('/products.json')
  return res.json()
}

const productPromise = getProducts() 


function App() {
  

  return (
    <>
   <NavBar/>
   <BannerSection/>
   <Count/>
   <Products productPromise={productPromise}/>
    </>
  )
}

export default App
