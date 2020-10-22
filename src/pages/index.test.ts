import { render, screen, fireEvent } from "@testing-library/react";
import mainPage from "./index";

test("should load search bar with success", async () => {
  render(mainPage());

  const searchBar = await screen.findByPlaceholderText("Digite aqui sua busca");

  expect(searchBar).toBeTruthy();
});

test("should be able to type in search bar", async () => {
  const typedValue = "typing";
  render(mainPage());

  const searchBar = await screen.findByPlaceholderText("Digite aqui sua busca");

  if (!(searchBar instanceof HTMLInputElement)) {
    throw new Error(`Expected to be Input and was ${searchBar}`);
  }

  fireEvent.change(searchBar, { target: { value: typedValue } });

  expect(searchBar.value).toEqual(typedValue);
});

test("should render mercado livre logo", async () => {
  render(mainPage());

  const mercadoLivreLogo = await screen.findByAltText("Mercado Livre logo");

  expect(mercadoLivreLogo).toBeTruthy();
});

test("should render button with search icon", async () => {
  render(mainPage());

  const searchButton = (await screen.findByAltText("Search Icon")).closest(
    "button"
  );

  expect(searchButton).toBeTruthy();
  expect(searchButton.children).toBeTruthy();
});
