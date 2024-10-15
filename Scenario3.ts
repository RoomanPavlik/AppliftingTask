import { expect } from 'chai';

describe('E-Shop View Item Details Functionality', () => {
    before(async () => {
        // Navigate to the e-shop homepage
        await browser.url('https://your-eshop-url.com');
    });

    it('should display item details when an item is clicked from the list', async () => {
        // Selectors for elements
        const itemLink = await $('.item-link');          // Imaginary selector for the item link in search/browse results
        const itemDetails = await $('.item-details');    // Imaginary selector for the item details container
        const itemName = await $('.item-name');          // Imaginary selector for the item name
        const itemPrice = await $('.item-price');        // Imaginary selector for the item price
        const itemDescription = await $('.item-description'); // Imaginary selector for the item description
        const itemImage = await $('.item-image');        // Imaginary selector for the item image

        // Step 1: Click on an item link to view its details
        await itemLink.click();

        // Step 2: Check that the item details page is displayed
        const detailsExist = await itemDetails.isDisplayed();
        expect(detailsExist).to.be.true;

        // Step 3: Check that the item name is displayed
        const nameExists = await itemName.isDisplayed();
        expect(nameExists).to.be.true;

        // Step 4: Check that the item price is displayed
        const priceExists = await itemPrice.isDisplayed();
        expect(priceExists).to.be.true;

        // Step 5: Check that the item description is displayed
        const descriptionExists = await itemDescription.isDisplayed();
        expect(descriptionExists).to.be.true;

        // Step 6: Check that the item image is displayed
        const imageExists = await itemImage.isDisplayed();
        expect(imageExists).to.be.true;
    });
});
