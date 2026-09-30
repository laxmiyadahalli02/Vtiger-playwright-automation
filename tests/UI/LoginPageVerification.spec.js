import {test,expect} from "@playwright/test"
test("login feature",async({page})=>{

    await page.goto("http://49.249.29.4:8888/index.php?module=Accounts&action=index")
    await expect(page.getByText("User Name")).toBeVisible()
    await expect(page.getByText("Password")).toBeVisible()
    await expect(page.getByRole("button",{name:"Login"})).toBeVisible()

})