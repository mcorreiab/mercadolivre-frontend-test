import React, { FunctionComponent } from 'react';
import styles from './productCard.module.scss';
import getSymbolFromCurrency from 'currency-symbol-map';

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
    const locationCardClasses = [styles.ProductCard__location,
    styles.ProductCard__location__card].join(' ');
    const locationTextClasses = [styles.ProductCard__location,
    styles.ProductCard__location__text].join(' ');

    return (
        <div className={styles.ProductCard}>
            <img className={styles.ProductCard__image} src={thumbnail}></img>
            <div>
                <p className={locationCardClasses}>{cityName}</p>
                <p>{title}</p>
                <p className={styles.ProductCard__price}>{symbol}{price.toFixed(2)}</p>
            </div>
            <p className={locationTextClasses}>{cityName}</p>
        </div>
    );
};

export default productCard;