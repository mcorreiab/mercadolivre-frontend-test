import { render, screen } from "@testing-library/react";
import searchQuery from "./[searchQuery]";
import {
  ProductListProps,
  ProductInformation,
} from "../components/ProductList";

describe("should render cards for all products found", () => {
  const cityName = "cityName";
  const currencyId = "BRL";
  const id = "ID";
  const price = 12;
  const thumbnail = "thumbnail";
  const title = "title";

  const products: ProductInformation = {
    cityName,
    currencyId,
    id,
    price,
    thumbnail,
    title,
  };

  const listingProps: ProductListProps = {
    products: [products],
  };

  test("should render cityName", async () => {
    render(searchQuery(listingProps));

    expect(await screen.findByText(cityName)).toBeTruthy();
  });

  test("should render currency and price", async () => {
    render(searchQuery(listingProps));

    expect(await screen.findByText(`R$ ${price.toFixed(2)}`)).toBeTruthy();
  });

  test("should render title", async () => {
    render(searchQuery(listingProps));

    expect(await screen.findByText(title)).toBeTruthy();
  });

  test("should render thumbnail as image", async () => {
    render(searchQuery(listingProps));

    const thumbnailComponent = await screen.findByAltText(`${title} image`);

    if (!(thumbnailComponent instanceof HTMLImageElement)) {
      throw new Error(`Expected to be a Image and is ${thumbnailComponent}`);
    }

    expect(thumbnailComponent.src).toMatch(thumbnail);
  });
});
