import { getItems } from '../items';
import axios from '../../config/axios';
import response from './mockResponse.json';

jest.mock('../../config/axios');

describe('item api test', () => {
    test('should get items with success', async () => {
        const searchQuery = "PS4";
        axios.get.mockResolvedValue(response);

        const actual = await getItems(searchQuery);

        expect(actual).toBeTruthy();
        expect(actual.results.length).toBe(4);
    });
});