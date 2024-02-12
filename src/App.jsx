import Products from "./components/Products"
import { products } from "./constants/data"

const App = () => {
  
  return (
    <div className="container px-2">
      <h1 className="text-primary text-center">PRODUCTS</h1>
      <Products products={products} />
    </div>
  )
}

export default App