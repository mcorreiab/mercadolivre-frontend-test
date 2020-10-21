import React, { FunctionComponent } from "react";
import ProductCard from "../ProductCard";
import Div from "./styled";

export interface ProductInformation {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  cityName: string;
  currencyId: string;
}

export interface ProductListProps {
  products: ProductInformation[];
}

const ProductList: FunctionComponent<ProductListProps> = ({
  products,
}: ProductListProps) => {
  const productCards = products.map((product) => (
    <ProductCard
      key={product.id}
      cityName={product.cityName}
      currencyId={product.currencyId}
      price={product.price}
      thumbnail={product.thumbnail}
      title={product.thumbnail}
    />
  ));

  return <Div>{productCards}</Div>;
};

export default ProductList;
