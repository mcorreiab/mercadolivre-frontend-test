import { render, screen, fireEvent } from '@testing-library/react';
import mainPage from './index';

test('should load search bar with success', async () => {
    render(mainPage());

    const searchBar = await screen.findByPlaceholderText('Digite aqui sua busca');

    expect(searchBar).toBeTruthy();
});

test('should be able to type in search bar', async () => {
    const typedValue = "typing";
    render(mainPage());

    const searchBar = await screen.findByPlaceholderText('Digite aqui sua busca');

    if (!(searchBar instanceof HTMLInputElement)) {
        throw new Error(`Expected to be Input and was ${searchBar}`);
    }

    fireEvent.change(searchBar, { target: { value: typedValue } });

    expect(searchBar.value).toEqual(typedValue);
});