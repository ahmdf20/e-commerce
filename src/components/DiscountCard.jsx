const DiscountCard = ({ discount }) => {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{`Voucher ${discount.name} ${discount.discount}%`}</dt>
      <dd className="mt-1 text-sm text-gray-900 text-right sm:mt-0 sm:col-span-2">{discount.name.split(" ").map(word => word.toUpperCase()).join("-")}</dd>
    </div>
  );
}

export default DiscountCard;