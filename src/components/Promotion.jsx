import DiscountCard from './DiscountCard';
import { discounts } from "../data";

const Promotion = () => {
  return (
    <section id="promotion" className="box-content p-9">
      <div className="max-w-lg lg:max-w-2xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200">
          <dl>
            {discounts.map((discount, id) => <DiscountCard key={id} discount={discount} />)}
          </dl>
        </div>
      </div>
    </section >
  )
}

export default Promotion;