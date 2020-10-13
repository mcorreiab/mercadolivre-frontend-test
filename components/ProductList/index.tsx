import React, { FunctionComponent } from 'react';
import ProductCard, { ProductCardProps } from '../ProductCard';
import * as styled from './styled';

export interface ProductInformation {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    cityName: string;
    currencyId: string;
};

export interface ProductListProps {
    products: ProductInformation[];
};

const ProductList: FunctionComponent<ProductListProps> = ({ products }: ProductListProps) => {
    const productCards = products.map(product => {
        const props: ProductCardProps = {
            cityName: product.cityName,
            currencyId: product.currencyId,
            price: product.price,
            thumbnail: product.thumbnail,
            title: product.title
        };

        return <ProductCard key={product.id} {...props} />
    });

    return (
        <styled.Div>
            {productCards}
        </styled.Div>
    );
}

export default ProductList;