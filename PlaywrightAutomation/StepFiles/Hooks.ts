import { BeforeAll, AfterAll, After, Before, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    console.log("BeforeAll")
   
});

Before(async function () {

    context = await browser.newContext({ viewport: null });

    page = await context.newPage();

    console.log("Before")

    // url, username , password and login
});

After(async function ({ pickle, result }) {

    if (result?.status === Status.FAILED) {
        // Screenshots are saved in the directory after the test is completed for each scenario
        const img = await page.screenshot({ path: `./test-result/ScreenshotsFailed/${pickle.name}.png` });

        await this.attach(img, 'image/png');
    }
    else if (result?.status === Status.PASSED) {
        // Screenshots are saved in the directory after the test is completed for each scenario
        const img = await page.screenshot({ path: `./test-result/ScreenshotsPassed/${pickle.name}.png` });        

        await this.attach(img, 'imagepasssed/png');
    }
    console.log("after")
});

AfterAll(async function () {

    //close
    await page.close();

    //browser.close/context.close 
    await browser.close();

    console.log("afterAll")

    console.log("==============================")
});

Given('i launch the OrangeHRM application in chrome browser', async function () {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    console.log("in background scenario")

});

Given('Enter the username in OrangeHRM {string}', async function (username) {

    await page.locator("//input[@name='username']").fill(username);
    
});

Given('Enter the password in OrangeHRM {string}', async function (password) {

    await page.locator("//input[@name='password']").fill(password);

});

Given('I click on the login button in OrangeHRM', async function () {

    await page.locator("//button[@type='submit']").click();

});

Given('I click on the logout button in OrangeHRM', async function () {

    await page.locator("//*[@class='oxd-userdropdown-name']").click();
    await page.getByText("Logout").click();
});

Given('Enter the username in OrangeHRM', async function () {
    await page.locator("//input[@name='username']").fill("Admin");
    const img = await page.screenshot({ path: `./test-result/Screenshots/username.png` });
    await this.attach(img, 'image/png');    
});

Given('Enter the password in OrangeHRM', async function () {
    await page.locator("//input[@name='password']").fill("admin123");
    const img = await page.screenshot({ path: `./test-result/Screenshots/password.png` });
    await this.attach(img, 'image/png');   
});