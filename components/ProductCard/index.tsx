import React, { FunctionComponent } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import * as styled from './styled';

export interface ProductCardProps {
    thumbnail: string;
    title: string;
    price: number;
    cityName: string;
    currencyId: string;
}

const productCard: FunctionComponent<ProductCardProps> = ({ thumbnail, title, price,
    cityName, currencyId }: ProductCardProps) => {
    const symbol = getSymbolFromCurrency(currencyId);

    return (
        <styled.Div>
            <styled.Img src={thumbnail} />
            <div>
                <styled.ParagraphCard>{cityName}</styled.ParagraphCard>
                <p>{title}</p>
                <styled.PriceParagraph>{symbol}{price.toFixed(2)}</styled.PriceParagraph>
            </div>
            <styled.ParagraphText>{cityName}</styled.ParagraphText>
        </styled.Div>
    );
};

export default productCard;