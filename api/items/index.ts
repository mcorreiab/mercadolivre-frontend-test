import { ItemResponse } from './model';
import axios from '../../config/axios';

export const getItems = async (searchQuery: String): Promise<ItemResponse> => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`
    const response = await axios.get<ItemResponse>(url);
    return response.data;
};