import React from 'react';
import TemplatePage from '../hoc/TemplatePage';
import ProductList, { ProductListProps, ProductInformation } from '../components/ProductList';
import { getItems } from '../api/items';
import { ItemResponse } from '../api/items/model';

interface ListingProps {
    items: ItemResponse
}

export default function Listing({ items }: ListingProps) {
    const productInformation = items.results.map(item => {
        const props: ProductInformation = {
            id: item.id,
            thumbnail: item.thumbnail,
            cityName: item.address.city_name,
            currencyId: item.currency_id,
            price: item.price,
            title: item.title
        };

        return props;
    });

    const productListProps: ProductListProps = {
        products: productInformation
    };

    return (
        <TemplatePage>
            <ProductList {...productListProps} />
        </TemplatePage>
    )
}

interface Params {
    searchQuery: String
}

interface Context {
    params: Params
}

export async function getServerSideProps({ params }: Context) {
    const response = await getItems(params.searchQuery);

    const props: ListingProps = {
        items: response
    };

    return { props };
}