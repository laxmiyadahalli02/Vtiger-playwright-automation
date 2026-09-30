import {test, expect} from "@playwright/test"
import { LoginPage } from "../../Pages/LoginPage"
import { title } from "process";

test("login page ",async({page})=>{

await page.goto("http://49.249.29.4:8888/index.php?module=Accounts&action=index")
 let loginPage = new LoginPage(page);

await loginPage.login("admin", "admin");

let PageTitle= await page.title()
console.log("pageTitle:", title)

// await expect(page).toHaveURL("http://49.249.29.4:8888/index.php?module=Accounts&action=index")
// await expect(page).toHaveTitle("ACOE Firelink")


})