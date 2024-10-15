import { expect } from 'chai';

describe('E-Shop View Item Details Functionality', () => {
    before(async () => {
        // Navigate to the e-shop homepage
        await browser.url('https://your-eshop-url.com');
    });

    it('should display item details when an item is clicked from the list', async () => {
        const itemLink = await $('.item-link');
        const itemDetails = await $('.item-details');
        const itemName = await $('.item-name');
        const itemPrice = await $('.item-price');
        const itemDescription = await $('.item-description');
        const itemImage = await $('.item-image');

        await itemLink.click();
        const detailsExist = await itemDetails.isDisplayed();
        expect(detailsExist).to.be.true;

        const nameExists = await itemName.isDisplayed();
        expect(nameExists).to.be.true;

        const priceExists = await itemPrice.isDisplayed();
        expect(priceExists).to.be.true;

        const descriptionExists = await itemDescription.isDisplayed();
        expect(descriptionExists).to.be.true;

        const imageExists = await itemImage.isDisplayed();
        expect(imageExists).to.be.true;
    });
});
