import { expect } from 'chai';

describe('E-Shop Add Item to Cart Functionality', () => {
    before(async () => {
        // Navigate to the e-shop homepage and click on an item
        await browser.url('https://your-eshop-url.com');
        const itemLink = await $('.item-link');
        await itemLink.click();
    });

    it('should add an item to the shopping cart when "Add to Cart" is clicked', async () => {
        // Selector for the Add to Cart button
        const addToCartBtn = await $('.add-to-cart-btn');
        const cartNotification = await $('.cart-notification');

        // Step 1: Click the "Add to Cart" button
        await addToCartBtn.click();

        // Step 2: Check if the cart notification appears
        const notificationExists = await cartNotification.isDisplayed();
        expect(notificationExists).to.be.true;
    });
});
