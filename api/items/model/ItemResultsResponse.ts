import { AddressResponse } from './AddressResponse';

export class ItemResultsResponse {
    id: string
    title: string
    price: number
    address: AddressResponse
    thumbnail: string
    currency_id: string
}