// import {test,expect} from "@playwright/test"
// test("login",async({page})=>{

// await page.goto("https://www.saucedemo.com/")
// await page.locator('#user-name').fill("standard_user")
// await page.locator('#password').fill("secret_sauce")
// await page.locator("#login-button").click()

// await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
// await expect(page).toHaveTitle("Swag Labs")

// })
import { test, expect } from '@playwright/test';

test('Verify Flipkart title and URL', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    // Verify title
    await expect(page).toHaveTitle(/Flipkart/);

    // Verify URL
    await expect(page).toHaveURL(/flipkart\.com/);

});