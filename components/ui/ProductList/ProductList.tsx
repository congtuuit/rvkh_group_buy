"use client";

import ProductCard, {
  ProductCardProps,
} from "@/components/ui/ProductCard/ProductCard";
import { Pagination } from "@nextui-org/react";

/**
 *
 * @param {*} props
 * @returns
 */
export interface ProductListProps {
  dataSource?: ProductCardProps[];
}
function ProductList(props: ProductListProps) {
  const { dataSource } = props;
  return (
    <div>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-6">
        {dataSource?.map((data, index) => {
          return <ProductCard key={index} {...data} />;
        })}
      </div>
      <Pagination className="mt-2" isCompact showControls total={10} initialPage={1} />
    </div>
  );
}

export default ProductList;
