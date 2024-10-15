import { expect } from 'chai';

describe('E-Shop Search Functionality', () => {
    before(async () => {
        // Navigate to the e-shop homepage
        await browser.url('https://your-eshop-url.com');
    });

    it('should display search results when a valid product keyword is entered', async () => {
        // Selectors for elements
        const searchBar = await $('#search-bar');
        const searchButton = await $('#search-button');
        const searchResults = await $('.search-results');

        // Step 1: Input a valid product keyword in the search bar
        await searchBar.setValue('Laptop');

        // Step 2: Click the search button
        await searchButton.click();

        // Step 3: Check that the search results are displayed
        const resultsExist = await searchResults.isDisplayed();
        expect(resultsExist).to.be.true;
    });

    it('should display a no results message for an invalid product keyword', async () => {
        // Selectors for elements
        const searchBar = await $('#search-bar');
        const searchButton = await $('#search-button');
        const noResultsMessage = await $('.no-results-message');

        // Step 1: Input an invalid product keyword in the search bar
        await searchBar.setValue('NonExistentItem123');

        // Step 2: Click the search button
        await searchButton.click();

        // Step 3: Check that the "no results" message is displayed
        const noResultsDisplayed = await noResultsMessage.isDisplayed();
        expect(noResultsDisplayed).to.be.true;
    });
});
