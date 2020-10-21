import AddressResponse from "./AddressResponse";

export default class ItemResultsResponse {
  id: string;

  title: string;

  price: number;

  address: AddressResponse;

  thumbnail: string;

  currencyId: string;
}
