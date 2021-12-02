import { products } from '../data'
import ProductCard from './ProductCard'

export default function Product() {
  return (
    <section id="products" class="box-content p-9">
      <div className="max-w-2xl lg:max-w-7xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, id) => <ProductCard key={id} product={product} />)}
        </div>
      </div>
    </section>

  )
}