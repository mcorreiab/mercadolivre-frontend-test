import React, { FunctionComponent } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import * as styled from "./styled";

export interface ProductCardProps {
  thumbnail: string;
  title: string;
  price: number;
  cityName: string;
  currencyId: string;
}

const productCard: FunctionComponent<ProductCardProps> = ({
  thumbnail,
  title,
  price,
  cityName,
  currencyId,
}: ProductCardProps) => {
  const symbol = getSymbolFromCurrency(currencyId);

  return (
    <styled.Div>
      <styled.Img src={thumbnail} alt={`${title} image`} />
      <styled.CityParagraph>{cityName}</styled.CityParagraph>
      <div>
        <p>{title}</p>
        <styled.PriceParagraph>
          {symbol} {price.toFixed(2)}
        </styled.PriceParagraph>
      </div>
    </styled.Div>
  );
};

export default productCard;
