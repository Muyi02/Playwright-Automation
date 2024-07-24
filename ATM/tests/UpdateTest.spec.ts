import { test, expect } from '@playwright/test';

test.describe('Update item quantity in cart', () => {
  test('should increase item quantity in the cart', async ({ page }) => {
    // Navigate to the page where the cart and item are located
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/'); // Replace with actual URL

    // Wait for the increment button to be visible and enabled
    const incrementButtonSelector = 'button.sc-11uohgb-6.cgtUCJ';
    await page.waitForSelector(incrementButtonSelector, { state: 'visible', timeout: 10000 }); // Increased timeout

    // Check if the increment button is enabled before clicking
    const incrementButton = await page.$(incrementButtonSelector);
    const isEnabled = await incrementButton?.isEnabled();
    
    if (!isEnabled) {
      console.error(`The increment button with selector '${incrementButtonSelector}' is not enabled.`);
      throw new Error(`The increment button with selector '${incrementButtonSelector}' is not enabled.`);
    }

    // Click the increment button
    await page.click(incrementButtonSelector);

    // Check the quantity input value after clicking the increment button
    const quantityInputSelector = 'input[type="number"]';
    const quantityInput = await page.waitForSelector(quantityInputSelector, { state: 'visible', timeout: 10000 }); // Increased timeout
    
    const quantityValue = await quantityInput?.inputValue();
    expect(quantityValue).toBe('2'); // Adjust expected value as needed
  });
});