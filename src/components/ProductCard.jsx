
const ProductCard = ({ product }) => {
  return (
    <a href={product.href} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.image}
          alt={`${product.name} Image`}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
      <p className="mt-1 text-sm font-small text-gray-800">{product.description}</p>
    </a>
  );
}

export default ProductCard;
