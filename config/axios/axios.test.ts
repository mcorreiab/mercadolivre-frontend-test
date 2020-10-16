import axios from "../axios";

test("should load default url with success", () => {
  expect(axios.defaults.baseURL).toBe("https://api.mercadolibre.com");
});
