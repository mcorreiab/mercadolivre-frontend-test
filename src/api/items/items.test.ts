import getItems from ".";
import axios from "../../config/axios";
import response from "./mockResponse.json";

jest.mock("../../config/axios");
const axiosMock = axios as jest.Mocked<typeof axios>;

describe("item api test", () => {
  test("should get items with success", async () => {
    const searchQuery = "PS4";
    axiosMock.get.mockResolvedValue(response);

    const actual = await getItems(searchQuery);

    expect(actual).toBeTruthy();
    expect(actual.results.length).toBe(4);
  });
});
