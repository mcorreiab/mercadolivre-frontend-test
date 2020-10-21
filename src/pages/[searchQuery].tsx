import React from "react";
import TemplatePage from "../hoc/TemplatePage";
import ProductList, {
  ProductListProps,
  ProductInformation,
} from "../components/ProductList";
import getItems from "../api/items";

export default function Listing(productListProps: ProductListProps) {
  return (
    <TemplatePage>
      <ProductList products={productListProps.products} />
    </TemplatePage>
  );
}

interface Params {
  searchQuery: String;
}

interface Context {
  params: Params;
}

export async function getServerSideProps({ params }: Context) {
  const response = await getItems(params.searchQuery);

  const productInformation = response.results.map((item) => {
    const props: ProductInformation = {
      id: item.id,
      thumbnail: item.thumbnail,
      cityName: item.address.cityName,
      currencyId: item.currencyId,
      price: item.price,
      title: item.title,
    };

    return props;
  });

  const props: ProductListProps = {
    products: productInformation,
  };

  return { props };
}
