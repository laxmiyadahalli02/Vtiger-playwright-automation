import{test,expect} from "@playwright/test"
test("dropdowns",async({page})=>{


await page.goto("https://demo.testautomationtv.com/practice?utm_source=chatgpt.com")
await page.locator('(//span[@class="practice-card-title"])[1]').click()

await page.locator('#city-selection').fill("New York, USA")

await page.waitForTimeout(2000)
await expect(page.locator('#city-selection')).toHaveValue("New York, USA")


await page.mouse.wheel(0, 800);

    
await page.waitForTimeout(2000)
await page.locator('#favorite-color').selectOption("Red")
await page.waitForTimeout(2000)
await page.locator('#programming-languages').selectOption(['JavaScript','Python'])
await page.waitForTimeout(3000)

})