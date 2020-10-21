import ItemResponse from "./model/ItemResponse";
import axios from "../../config/axios";

const getItems = async (searchQuery: String): Promise<ItemResponse> => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${searchQuery}&limit=4`;
  const response = await axios.get<ItemResponse>(url);
  return response.data;
};

export default getItems;
