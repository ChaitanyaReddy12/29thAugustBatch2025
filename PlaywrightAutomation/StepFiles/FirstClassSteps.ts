import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { chromium, expect, firefox, webkit } from "playwright/test";
import { TestAutomationPractice } from "../Files/TestData.json"

import { TestAutomationPractice1 } from "../Files/TestData.json"

import { TestAutomationPractice2 } from "../Files/TestData.json"

import { ExcelReader } from '../Files/ExcelReader'; // Adjust path as needed

import * as path from 'path';

//1st way: to declare the wait/time for thr entire page

setDefaultTimeout(30000) // 30 seconds

//2nd way: to declare the wait/time for thr entire page

setDefaultTimeout(30 * 1000)

let testData: any[];

let page: {
    [x: string]: any;
    locator: any; goto: (arg0: string) => any; getByLabel: (arg0: string) => string[]; getByRole: (arg0: string, arg1: { name: string; }) => {
        [x: string]: any; (): any; new(): any; click: { (): any; new(): any; };
    }; getByText: (arg0: string) => any;
}, browser: {
    contexts(): unknown; newContext: (arg0: { viewport: null; }) => any; close: () => any;
};

Given('i launch the browser', async function () {

    console.log("i launch the browser")

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"]
    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()
});

Given('i launch the Firefox browser', async function () {

    console.log("i launch the Firefox browser")

    browser = await firefox.launch({
        headless: false,
        args: ["--start-maximized"]
    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()
});

Given('i launch the Safari browser', async function () {

    console.log("i launch the Safari browser")

    browser = await webkit.launch({
        headless: false,
        args: ["--start-maximized"]
    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()
});

Given('i launch the headless browser', async function () {

    console.log("i launch the headless browser")

    browser = await chromium.launch({
        headless: true,
        args: ["--start-maximized"]
    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()
});



Then('i launch the url', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // await page.locator("xpath/css").fill()

    // await page.locator("").inserttext()

    // await page.locator("").click()

    // await page.locator("").clear()
});

Then('i close the browser', async function () {

    await browser.close()
});

Then('i launch the test automation practice url', async function () {

    await page.waitForTimeout(3000) // 3 seconds

    console.log("i launch the test automation practice url")

    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.waitForTimeout(10000) // 10 seconds
});

Then('i verify playwright locators', async function () {

    //Syntax: await page.getbyplaceholder(“attribute value of the placeholder attributename”).click()/fill()

    await page.getByPlaceholder('Enter Name').fill('Playwright')

    await page.getByPlaceholder('Enter Phone').type('0909090909')

    await page.getByText('START').click()

    await page.getByText('STOP').click()

    await page.getByRole('button', { name: 'START' }).click()

    await page.getByRole('button', { name: 'STOP' }).click()

});

Then('i verify playwright locators2', async function () {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    await page.getByAltText('ParaBank').click()

    await page.getByTitle('ParaBank').click()

});

Then('i verify playwright locators3', async function () {

    await page.goto("https://login.salesforce.com/")

    await page.getByLabel('Username').fill('testing')

    await page.getByLabel('Password').fill('quality thought')

});

Then('i verify selenium locators', async function () {

    //absoulte xpath

    //await page.locator("/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[2]").type('quality thoughts')

    // relative xpath

    //1st way

    await page.locator('//*[@id="email"]').fill('qualitythoughts@gmail.com')

    await page.locator('//*[@id="email"]').clear()

    //2nd way

    await page.locator('//input[@placeholder="Enter EMail"]').fill('qualitythoughtsplaywright@gmail.com')

    //css selector

    await page.locator('//*[@id="email"]').clear()

    await page.locator('input[placeholder="Enter EMail"]').fill('qualitythoughts@gmail.com')

    await page.locator('.wikipedia-search-input').fill('wikipedia')

    await page.locator('#field2').fill('friday')

});

Then('i verify xpath methods', async function () {

    console.log("===================contains method==============")

    await page.locator("//*[contains(@id,'textarea')]").fill('qualitythoughts@gmail.com')

    await page.locator("//input[contains(@value,'sunday')]").click()

    console.log("===================starts-with method==============")

    await page.locator("//input[starts-with(@class,'wikipedia-search-i')]").fill('testing')

    await page.locator("//*[starts-with(@class,'wikipedia-search-bu')]").click()

    console.log("===================text method==============")

    var text = await page.locator("//*[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("1st way of text is:", text) //1st way of text is: For Selenium, Cypress & Playwright

    text = await page.locator("//span[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("2nd way of text is:", text) //2nd way of text is: For Selenium, Cypress & Playwright

    text = await page.locator("//span[contains(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("3rd way of text is:", text) //3rd way of text is: For Selenium, Cypress & Playwright

    text = await page.locator("//span[starts-with(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("4th way of text is:", text) //4th way of text is: For Selenium, Cypress & Playwright

    console.log("===================And method==============")

    await page.locator("//input[@type='text' and @id='name']").fill('saturday')

    await page.locator("//*[@name='start' and text()='START']").click()

    console.log("===================or method==============")

    var orCount = await page.locator("//input[@type='text' or @id='name']").all()

    console.log("orCount is:", orCount.length) //orCount is:13
});


Then('i launch the swiggy application', async function () {

    await page.goto("https://www.swiggy.com/")
});


Then('i verify xpath Axes', async function () {

    console.log("===================Parent==============")

    var parentCount = await page.locator("//*[text()='Sign in']//parent::div").all()

    console.log("parentCount is:", parentCount.length) //parentCount is:1

    console.log("===================ancestor==============")

    var ancestorCount = await page.locator("//*[text()='Sign in']//ancestor::div").all()

    console.log("ancestorCount is:", ancestorCount.length) //ancestorCount is:8

    console.log("===================Preceding==============")

    var precedingCount = await page.locator("//*[text()='Sign in']//preceding::div").all()

    console.log("precedingCount is:", precedingCount.length) //precedingCount is:11

    console.log("===================child==============")

    var childCount = await page.locator("//div[@class='Uccaw']//child::div").all()

    console.log("childCount is:", childCount.length) //childCount is:2

    childCount = await page.locator("//div[@class='Uccaw']//child::a").all()

    console.log("childCount is:", childCount.length) //childCount is:4

    console.log("===================descendant==============")

    var descendantCount = await page.locator("//div[@class='Uccaw']//descendant::div").all()

    console.log("descendantCount is:", descendantCount.length) //descendantCount is:2

    descendantCount = await page.locator("//div[@class='Uccaw']//descendant::a").all()

    console.log("descendantCount is:", descendantCount.length) //descendantCount is:4

    console.log("===================following==============")

    var followingCount = await page.locator("//div[@class='Uccaw']//following::a").all()

    console.log("followingCount is:", followingCount.length) //followingCount is:776

    await page.locator("//div[@class='Uccaw']//following::a[text()='Partner with us']").click()

    await page.bringToFront()

    console.log("===================following sibiling==============")

    var followingSiblingCount = await page.locator("//a[text()='Swiggy Corporate']//following-sibling::a[text()='Partner with us']").all()

    console.log("followingSiblingCount is:", followingSiblingCount.length) //followingSiblingCount is:1

    await page.locator("//a[text()='Swiggy Corporate']//following-sibling::a[text()='Partner with us']").click()

    await page.bringToFront()

});

Then('i verify the playwright methods', async function () {

    console.log("=================to reload the page================")

    await page.reload()

    console.log("=================to click the web element================")

    await page.locator("//a[text()='Swiggy Corporate']").last().click()

    console.log("=================to go back to the previous tab================")

    await page.bringToFront()

    await page.locator("//a[text()='Sign in']").click()

    console.log("=================to enter text to the textbox================")

    await page.locator("//input[@type='tel']").type("9009900990")

    await page.locator("//a[text()='Login']").click()

    console.log("=================to enter text to the textbox================")

    await page.locator("//input[@name='name']").fill("quality")

    await page.goto("https://testautomationpractice.blogspot.com/")

    console.log("=================to get more than one web element count================")

    var elementsCount = await page.locator("//*[@type='text']").all()

    console.log("elementsCount is :", elementsCount) //elementsCount is:13

    console.log("=================to get the title of the web page================")

    var title = await page.title()

    console.log("title is :", title) //title is: Automation Testing Practice

    console.log("=================to scroll to the respective web element================")

    await page.locator("//input[@id='field1']").scrollIntoViewIfNeeded()

    console.log("=================to clear the text in the textbox================")

    await page.locator("//input[@id='field1']").clear()

    await page.locator("//input[@id='field1']").fill("quality")

});

Then('i verify the playwright methods part2', async function () {

    var textOfTheWebElementCount = await page.locator("//*[@class='title']").allInnerTexts()

    console.log("textOfTheWebElementCount is :", textOfTheWebElementCount.length) //textOfTheWebElementCount is: 17

    console.log("=============for loops============")

    for (let i = 0; i < textOfTheWebElementCount.length; i++) {

        console.log(textOfTheWebElementCount[i])
    }

    console.log("===================to return one webelement text==============")

    var text = await page.locator("//*[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("1st way of text is:", text) //1st way of text is: For Selenium, Cypress & Playwright

    text = await page.locator("//span[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("2nd way of text is:", text) //2nd way of text is: For Selenium, Cypress & Playwright

    text = await page.locator("//span[contains(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("3rd way of text is:", text) //3rd way of text is: For Selenium, Cypress & Playwright

    text = await page.locator("//span[starts-with(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("4th way of text is:", text) //4th way of text is: For Selenium, Cypress & Playwright

    console.log("===================click on the new tab and go to the previous page==============")

});

Then('i verify the playwright methods part3', async function () {

    console.log("===================Hidden==============")

    let hidden = await page.locator(".wikipedia-search-input").isHidden()

    console.log("webelement hidden status:", hidden)

    if (hidden == false) {

        await page.locator(".wikipedia-search-input").fill("testing")
    }

    console.log("===================Visible==============")

    let visible = await page.getByPlaceholder("Enter Name").isVisible()

    console.log("visible status:", visible)

    if (visible == true) {

        await page.getByPlaceholder("Enter Name").fill("aswini")
    }

    console.log("===================Visible==============")

    let disabled = await page.getByPlaceholder("Enter EMail").isDisabled()

    console.log("disabled status:", disabled)

    if (disabled == false) {

        await page.getByPlaceholder("Enter EMail").fill("qt@gmail.com")
    }

    console.log("===================enabled==============")

    let enabled = await page.getByPlaceholder("Enter Phone").isEnabled()

    console.log("enabled status:", enabled)

    if (enabled == true) {

        await page.getByPlaceholder("Enter Phone").fill("8790908789")
    }

    console.log("===================editable==============")

    let editable = await page.locator("#textarea").isEditable()

    console.log("editable status:", enabled)

    if (editable == true) {

        await page.locator("#textarea").fill("hyderabad")
    }

    console.log("===================checked==============")

    await page.locator("#sunday").scrollIntoViewIfNeeded()

    let checked = await page.locator("#sunday").isChecked()

    console.log("checked status:", checked) // false

    if (checked == false) {

        await page.locator("#sunday").setChecked(true)

        checked = await page.locator("#sunday").isChecked()

        console.log("checked status:", checked) // true
    }

    if (checked == true) {

        await page.locator("#sunday").uncheck()

        checked = await page.locator("#sunday").isChecked()

        console.log("checked status:", checked) // false
    }

    await page.url("https://www.meesho.com/")

});

Then('i verify the playwright methods part4', async function () {

    await page.goto("https://www.jazzpharma.com/")

    console.log("===================Visible==============")

    let Visible = await page.locator("//*[@id='main-nav']//li//a[text()='About']").isVisible()

    console.log("Visible status:", Visible)

    if (Visible == true) {

        await page.locator("//*[@id='main-nav']//li//a[text()='About']").first().hover()

        await page.locator("//*[@id='main-nav']//li//a[text()='Leadership']").click()

        var title = await page.title()

        console.log(title) //Leadership | Jazz Pharmaceuticals

        if (title == "Leadership | Jazz Pharmaceuticals") {

            console.log("user is successfully naviagetd to leadership page")
        }
    }

    console.log("===================get Attribute==============")

    let attributeValue = await page.locator("//*[@id='main-nav']//li//a[text()='About']").getAttribute("href")

    console.log("attributeValue of href attribute name is", attributeValue) //about

    attributeValue = await page.locator("//*[@id='main-nav']//li//a[text()='About']").getAttribute("data-drupal-link-system-path")

    console.log("attributeValue of href data-drupal-link-system-path name is", attributeValue) //node/16

    console.log("===================highlight==============")

    await page.locator("//div[@class='page-nav bg-greyLight']//li//*[text()='Board of Directors']").highlight()

    await page.locator("//div[@class='page-nav bg-greyLight']//li//*[text()='Board of Directors']").click()

    // verify title for Board of Directors page

});



Then('i verify the playwright methods part5', async function () {

    console.log("========================allInnerTexts======================")

    var textOfTheWebElementCount = await page.locator("//*[@class='title']").allInnerTexts()

    console.log("textOfTheWebElementCount is :", textOfTheWebElementCount.length) //textOfTheWebElementCount is: 17

    console.log("=============for loops============")

    for (let i = 0; i < textOfTheWebElementCount.length; i++) {

        console.log(textOfTheWebElementCount[i])
    }

    console.log("========================allTextContents======================")

    textOfTheWebElementCount = await page.locator("//*[@class='title']").allTextContents()

    console.log("textOfTheWebElementCount is :", textOfTheWebElementCount.length) //textOfTheWebElementCount is: 17

    console.log("=============for loops============")

    for (let i = 0; i < textOfTheWebElementCount.length; i++) {

        console.log(textOfTheWebElementCount[i])
    }

    /*========================allInnerTexts======================
textOfTheWebElementCount is : 17
=============for loops============
Automation Testing Practice
Upload Files
Static Web Table
Dynamic Web Table
Pagination Web Table
Tabs
Dynamic Button
Alerts & Popups
Mouse Hover
Double Click
Drag and Drop
Slider
SVG Elements
Scrolling DropDown
Labels And Links
Form
ShadowDOM
========================allTextContents======================
textOfTheWebElementCount is : 17
=============for loops============
Automation Testing Practice
Upload Files
Static Web Table
Dynamic Web Table
Pagination Web Table
Tabs
Dynamic Button
Alerts & Popups
Mouse Hover
Double Click
Drag and Drop
Slider
SVG Elements
Scrolling DropDown
Labels And Links
Form
ShadowDOM*/

});

Then('i verify the keyboard actions', async function () {

    await page.locator("#field1").scrollIntoViewIfNeeded()

    //1st way

    //clear means it will only clear the existing data

    await page.locator("#field1").clear()

    //2nd way

    await page.locator("#field1").type("venkat")

    // fill means clear and enter new data

    await page.locator("#field1").fill(" ")

    //3rd way

    await page.locator("#field1").type("setup")

    await page.locator("#field1").press("Control+A")

    await page.keyboard.press("Delete")

    await page.keyboard.up("Control")

    await page.keyboard.insertText("Hitesh")

    await page.locator("#field1").clear()

    //4th way

    await page.locator("#field1").pressSequentially("Deepthi")

    console.log("=================right click=============")

    await page.locator(".wikipedia-search-input").scrollIntoViewIfNeeded()

    await page.locator(".wikipedia-search-input").click({ button: 'right' })

    console.log("=================first and last methods=============")

    await page.locator("//*[@type='text']").first().fill("Mithilesh")

    await page.locator("//*[@type='text']").last().fill("Swathi")

    console.log("=================i want to enter data in different index=============")

    await page.locator("//*[@type='text']").nth(0).clear()

    await page.locator("//*[@type='text']").nth(0).fill("manik")

    await page.locator("//*[@type='text']").nth(10).scrollIntoViewIfNeeded()

    await page.locator("//*[@type='text']").nth(10).fill("Sakthi")

    console.log("=================drag and drop=============")

    //1st way

    var drag = await page.locator("#draggable")

    var drop = await page.locator("#droppable")

    await drag.scrollIntoViewIfNeeded()

    await drag.dragTo(drop)

    //2nd way

    await page.locator("#draggable").dragTo(await page.locator("#droppable"))

});

Then('i verify dropdowns and screenshots', async function () {

    var colorDropdown = await page.locator("#colors")

    await colorDropdown.scrollIntoViewIfNeeded()

    await colorDropdown.selectOption("Green")

    await colorDropdown.selectOption("White")

    await colorDropdown.selectOption(["Red", "Blue", "Yellow"])

    // handle country dropdown using select options

    // take the options in all method and use for loop and select the country

    console.log("===========================srcreenshots===============")

    console.log("===============1st way of taking the secreenshot of the web element level========")

    await page.locator("//*[@type='text']").nth(0).scrollIntoViewIfNeeded()

    await page.locator("//*[@type='text']").nth(0).screenshot({ path: 'name web element screenshot.png' })

    console.log("==============2nd way is taking the screenshot upto screen length========")

    await page.screenshot({ path: 'upto screen level.jpeg' })

    // .gif, .svg are not working

    console.log("==============3rd way of taking the screenshot full page========")

    await page.screenshot({ path: 'full page.jpeg', fullPage: true })

    await page.goBack()

    await page.goForward()


});


Then('i verify webcalendar dynamically', async function () {

    await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

    let datePicker = await page.locator("//input[@id='datepicker']")

    if (datePicker.isVisible()) {

        console.log("datePicker is displayed on the webpage");

        await page.locator("//input[@id='datepicker']").click();

        let calendarTable = await page.locator(".ui-datepicker-calendar");

        if (calendarTable.isVisible()) {

            console.log("calendarTable is displayed on the webpage");

            let rows = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr").all();

            console.log(" rows count is :" + rows.length);

            if (rows.length > 0) {

                console.log("calendar have rows");

                for (let i = 1; i <= rows.length; i++) {

                    let columns = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td").all();

                    console.log(" columns count is :" + columns.length);

                    if (columns.length > 0) {

                        console.log("calendar have columns");

                        for (let j = 1; j <= columns.length; j++) {

                            let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]");

                            let actualDate1 = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]").innerText();

                            let expectedDate = "30";

                            if (actualDate1 == expectedDate) {

                                console.log("date :" + actualDate1
                                    + " is displayed in the calendar row number " + i
                                    + " and column number is: " + j);

                                actualDate.click();
                            }
                        }

                    } else {

                        console.log("calendar doesn't have columns");
                    }
                }

            } else {

                console.log("calendar doesn't have rows");
            }
        }
        else {
            console.log("calendarTable is not displayed on the webpage");
        }
    }
    else {
        console.log("datePicker is not displayed on the webpage");
    }
});

Then('i verify the dates', async function () {

    const todaysDate = new Date()

    console.log(todaysDate)

    const convertingTodaysdate = todaysDate.toLocaleDateString()

    console.log(convertingTodaysdate) //8/10/2025

    const yesterdaysdate = new Date(todaysDate)

    yesterdaysdate.setDate(todaysDate.getDate() - 1)

    console.log(yesterdaysdate) //Tue Oct 07 2025 07:54:39 GMT+0530 (India Standard Time)

    console.log(yesterdaysdate.toLocaleDateString())

    const tomorrowsDate = new Date(todaysDate)

    tomorrowsDate.setDate(todaysDate.getDate() + 365)

    console.log(tomorrowsDate) //Tue Oct 07 2025 07:54:39 GMT+0530 (India Standard Time)

    console.log(tomorrowsDate.toLocaleDateString()) //8/10/2026

    await page.locator("//*[@type='text']").first().type(tomorrowsDate.toLocaleDateString())

    await page.locator("//*[@type='text']").nth(1).type(convertingTodaysdate)

    await page.locator("#datepicker").first().scrollIntoViewIfNeeded()

    await page.locator("#datepicker").first().type(convertingTodaysdate)

});


Then('i verify the web table in static mode', async function () {

    let webtable = await page.locator("//table[@name='BookTable']")

    if (webtable.isVisible()) {

        await webtable.scrollIntoViewIfNeeded()

        var expectedText = "Mukesh"

        var actualText = await page.locator("//table[@name='BookTable']/tbody/tr[5]/td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, " is displayed in the web table") //Mukesh  is not displayed in the web tabl
        }
        else {

            console.log(expectedText, " is not displayed in the web table")
        }
    }
    else {

        console.log("web table is not displayed in the web page")
    }
});

Then('i verify the web table in static mode2', async function () {

    let webtable = await page.locator("//table[@name='BookTable']")

    if (webtable.isVisible()) {

        await webtable.scrollIntoViewIfNeeded()

        var expectedText = "Animesh"

        var actualText = await page.locator("//table[@name='BookTable']/tbody/tr[5]/td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, " is displayed in the web table")
        }
        else {

            console.log(expectedText, " is not displayed in the web table") //Animesh  is not displayed in the web tabl
        }
    }
    else {

        console.log("web table is not displayed in the web page")
    }
});

Then('i verify the web table in dynamic mode', async function () {

    let webtable = await page.locator("//table[@name='BookTable']")

    if (webtable.isVisible()) {

        await webtable.scrollIntoViewIfNeeded()

        console.log("web table is displayed in the web page")

        let rows = await page.locator("//table[@name='BookTable']/tbody/tr").all()

        if (rows.length > 0) {

            // to execute row wise

            for (let i = 1; i <= rows.length; i++) {

                console.log("=====================table  headers==================")

                if (i == 1) {

                    let headerColumns = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/th").all()

                    for (let j = 1; j <= headerColumns.length; j++) {

                        let headerText = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/th[" + j + "]").innerText()

                        console.log(headerText)
                    }
                }

                console.log("=====================table  columns==================")

                let columns = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/td").all()

                if (columns.length > 0) {

                    // to execute column wise

                    for (let j = 1; j <= columns.length; j++) {

                        // var expectedText = "Animesh"

                        var expectedText = "Mukesh"

                        var actualText = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/td[" + j + "]").innerText()

                        var count = 0;

                        if (actualText == expectedText) {

                            if (count < 1) {

                                count++;

                                console.log(expectedText, " is displayed in the row ", i, " and column ", j, " in the web table")

                                break;
                            }

                        }

                    }

                } else {

                    console.log(" columns is not displayed in the web table")

                }
            }

        } else {

            console.log(" rows is not displayed in the web table")

        }

    }
    else {

        console.log("web table is not displayed in the web page")
    }

});



Then('i verify the web calendar in static mode', async function () {

    await page.locator("#datepicker").scrollIntoViewIfNeeded()

    await page.locator("#datepicker").click()

    let webCalendar = await page.locator("//table[@class='ui-datepicker-calendar']")

    if (webCalendar.isVisible()) {

        var expectedDate = "30"

        //1st way

        var actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[5]/td[5]").innerText()

        if (actualDate == expectedDate) {

            console.log(expectedDate, " is displayed in the web Calendar table")

            await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[5]/td[5]").click()
        }
        else {

            console.log(expectedDate, " is not displayed in the web Calendar table")
        }

        //2nd way

        // var date = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[5]/td[5]")

        // var actualDate = await date.innerText()

        // if (actualDate == expectedDate) {

        //     console.log(expectedDate, " is displayed in the web Calendar table")

        //     await date.click()
        // }
        // else {

        //     console.log(expectedDate, " is not displayed in the web Calendar table")
        // }
    }
    else {

        console.log("web Calendar is not displayed in the web page")
    }
});

Then('i verify the web calendar in static mode2', async function () {

    let date1Picker = await page.locator("#datepicker")

    date1Picker.scrollIntoViewIfNeeded()

    const todaysDate = new Date()

    const tomorrowsDate = new Date(todaysDate)

    tomorrowsDate.setDate(todaysDate.getDate() + 45)

    let date45 = tomorrowsDate.toLocaleDateString()

    await date1Picker.type(date45)

});

Then('i launch the meesho applictaion', async function () {

    await page.goto("https://www.amazon.in/")
});

Then('i verify the hard assertions', async function () {

    // Await expect(locator).methods()

    // await expect(page.getByAltText('Amazon Home')).toBeVisible()

    await expect(page.locator("//a[text()='Home & Kitchen']")).toBeVisible()

    //try {
    // await expect(page.locator("//a[text()='Home & Kitchen']")).toBeHidden()
    // }
    // catch (error) {

    //console.log("the web element is not be hidden")
    //}
    //await expect(page.getByPlaceholder("Search Amazon.in")).toBeDisabled()

    await expect(page.getByPlaceholder("Search Amazon.in")).toBeEnabled()

    await page.getByPlaceholder("Search Amazon.in").fill("Home")

    //await expect(page.getByText("Cart")).toBeAttached()

    //getByRole('link', { name: 'items in cart' })

    await expect(page.locator("//span[contains(text(),'Cart')]").last()).toBeAttached()

    await expect(page.locator("(//span[contains(text(),'Cart')])[2]")).toHaveCount(1)

    await expect(page.locator("//*[@class='nav-a  ']")).toHaveCount(32)

    await expect(page.locator("(//span[contains(text(),'Cart')])[2]")).toContainText('Cart')

    await expect(page.locator("//div[@id='nav-xshop']/ul/li/div/a")).toContainText(["Today's Deals", 'Mobiles', 'Customer Service'])

    await expect(page.locator("//a[text()='Home & Kitchen']")).toHaveAttribute('tabindex')

    await expect(page.locator("//a[text()='Home & Kitchen']")).toHaveAttribute('class', 'nav-a  ')

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator(".wikipedia-search-input")).toHaveId('Wikipedia1_wikipedia-search-input')

    await expect(page.locator(".wikipedia-search-input")).toBeEmpty()

    await page.locator(".wikipedia-search-input").fill('playwright')

    await expect(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await page.getByPlaceholder('Enter Name').fill('sakthi')

    await expect(page.locator("//*[@class='start']")).toHaveRole('button')

    await expect(page.locator("//*[@class='start']")).toHaveText('START')

    await expect(page.locator("//*[@class='start']")).toBeTruthy()

    console.log("===========hi team===========")
});

Then('i verify the soft assertions', async function () {

    await expect.soft(page.locator("//a[text()='Home & Kitchen']")).toBeVisible()

    //await expect.soft(page.locator("//a[text()='Home & Kitchen']")).toBeHidden()

    //await expect.soft(page.getByPlaceholder("Search Amazon.in")).toBeDisabled()

    await expect.soft(page.getByPlaceholder("Search Amazon.in")).toBeEnabled()

    await page.getByPlaceholder("Search Amazon.in").fill("Home")

    //await expect.soft(page.getByText("Cart")).toBeAttached()

    //getByRole('link', { name: 'items in cart' })

    await expect.soft(page.locator("//span[contains(text(),'Cart')]").last()).toBeAttached()

    await expect.soft(page.locator("(//span[contains(text(),'Cart')])[2]")).toHaveCount(1)

    await expect.soft(page.locator("//*[@class='nav-a  ']")).toHaveCount(32)

    await expect.soft(page.locator("(//span[contains(text(),'Cart')])[2]")).toContainText('Cart')

    await expect.soft(page.locator("//div[@id='nav-xshop']/ul/li/div/a")).toContainText(["Today's Deals", 'Mobiles', 'Customer Service'])

    await expect.soft(page.locator("//a[text()='Home & Kitchen']")).toHaveAttribute('tabindex')

    await expect.soft(page.locator("//a[text()='Home & Kitchen']")).toHaveAttribute('class', 'nav-a  ')

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect.soft(page.locator(".wikipedia-search-input")).toHaveId('Wikipedia1_wikipedia-search-input')

    await expect.soft(page.locator(".wikipedia-search-input")).toBeEmpty()

    await page.locator(".wikipedia-search-input").fill('playwright')

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await page.getByPlaceholder('Enter Name').fill('sakthi')

    await expect.soft(page.locator("//*[@class='start']")).toHaveRole('button')

    await expect.soft(page.locator("//*[@class='start']")).toHaveText('START')

    await expect.soft(page.locator("//*[@class='start']")).toBeTruthy()

    console.log("===========hi team===========")
});


Then('i verify the and method', async function () {

    await page.getByPlaceholder('Enter Name').fill('mithilesh')

    //1st way

    console.log("===================Xpath And method==============")

    await page.locator("//input[@id='email' and @placeholder='Enter EMail']").fill('friday@gmail.com')

    //2nd way

    console.log("===================playwright And method==============")

    await page.getByPlaceholder('Enter Phone').and(page.locator("//input[@id='phone']")).fill('8900988900')
});


Then('i verify the screenshots on folder level', async function () {

    await page.goto("https://www.amazon.in/")

    console.log("===========================srcreenshots===============")

    console.log("===============1st way of taking the secreenshot of the web element level========")

    //await page.locator("//a[text()='Bestsellers']").scrollIntoViewIfNeeded()

    await page.locator("//a[text()='Bestsellers']").screenshot({ path: './test-result/Screenshots/name web element screenshot.png' })

    console.log("==============2nd way is taking the screenshot upto screen length========")

    await page.screenshot({ path: "./test-result/Screenshots/Upto screen level.jpeg" })

    // .gif, .svg are not working

    console.log("==============3rd way of taking the screenshot full page========")

    await page.screenshot({ path: './test-result/Screenshots/full page.jpeg', fullPage: true })

});

Then('i verify filter', async function () {

    await page.goto("https://www.saucedemo.com/")

    await page.getByPlaceholder('Username').fill('standard_user')

    await page.getByPlaceholder('Password').fill('secret_sauce')

    await page.locator('#login-button').click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bike Light' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bike Light' })
        .getByRole('button', { name: 'Remove' }).click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'Add to cart' }).click()

    /*

    1st task:

    1) store all the text in one array/tuple 
['Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket']

   2) iterate the array from index o to last index

   3) pass the index text in the hasttext and verify add to carrt and remobve for all the 6 images 

   2nd task:

   handle all types of alerts in test automation practice website

   */

});


Then('i launch the herokuapp application', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

});

Then('i verify simple alert', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; accept: () => any; dismiss: () => any }) => {

        expect(dialog.type()).toBe('alert')

        expect(dialog.message()).toContainText('I am a JS Alert')

        await dialog.accept()

        await expect(page.locator("//*[@id='result']")).toHaveText('You successfully clicked an alert')
    });

    await page.locator("//button[text()='Click for JS Alert']").click()

});


Then('i verify confirmation alert in accept', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; accept: () => any; dismiss: () => any }) => {

        expect(dialog.type()).toBe('confirm')

        expect(dialog.message()).toContainText('I am a JS Confirm')

        await dialog.accept()

        await expect(page.locator("//*[@id='result']")).toHaveText('You clicked: Ok')

        console.log("===========hi team============")
    });

    await page.locator("//button[text()='Click for JS Confirm']").click()

});


Then('i verify confirmation alert in dismiss', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; accept: () => any; dismiss: () => any }) => {

        expect(dialog.type()).toBe('confirm')

        expect(dialog.message()).toContainText('I am a JS Confirm')

        await dialog.dismiss()

        await expect(page.locator("//*[@id='result']")).toHaveText('You clicked: Cancel')

        console.log("===========hi team============")

    });

    await page.locator("//button[text()='Click for JS Confirm']").click()

});

Then('i verify prompt alert', async function () {

    await page.once('dialog', async (dialog: {
        acceptString(arg0: string): unknown; type: () => any; message: () => any; accept: () => any; dismiss: () => any; text: () => any
    }, acceptString: () => string) => {

        expect(dialog.type()).toBe('prompt')

        expect(dialog.message()).toContainText('I am a JS prompt')

        await dialog.acceptString('testing')

        await dialog.accept()

        await expect(page.locator("//*[@id='result']")).toHaveText('You entered:')

        console.log("===========hi team============")
    });

    await page.locator("//button[text()='Click for JS Prompt']").click()

});

Then('i launch the Frames application', async function () {

    await page.goto("https://ui.vision/demo/webtest/frames/")

});

Then('i verify frames and nested frames', async function () {

    var allFramesCount = await page.frames()

    console.log("allFramesCount in a web page is: ", allFramesCount.length) //allFramesCount in a web page is: 7

    //syntax: Await page.frameLocator(“xpath/url”).locator(playwright locator/xpath/css).methods()

    //1st way

    //await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("Hi Team good morning")

    //2nd way

    const frame1 = await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']")

    await frame1.fill("Hi everyone good morning")

    //3rd way

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

    await frame3.fill("//input[@name='mytext3']", "have a great day")

    const childFramesCountOnFrame3 = await frame3.childFrames()

    console.log("childFramesCountOnFrame3 in a web page is: ", childFramesCountOnFrame3.length) //childFramesCountOnFrame3 in a web page is: 3

    await childFramesCountOnFrame3[0].locator("//span[text()='Hi, I am the UI.Vision IDE']").click()

    await childFramesCountOnFrame3[0].locator("//span[text()='Web Testing']").click()

    await page.mainFrame()

    console.log("===========================================")

    await page.goto("https://the-internet.herokuapp.com/nested_frames")

    allFramesCount = await page.frames()

    console.log("allFramesCount in a web page is: ", allFramesCount.length) //allFramesCount in a web page is: 6

    var leftframe = await page.frameLocator("//frame[@src='/frame_bottom']").locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("The text shown in Left frame is: ", leftframe)

    //get the text of any frame and print the text
});


Then('i verify file uploading', async function () {

    await page.locator("//input[@type='file']").first().scrollIntoViewIfNeeded()

    const chooseFile1 = await page.waitForSelector("(//input[@type='file'])[1]")

    await chooseFile1.setInputFiles("./test-result/Screenshots/full page.jpeg")

    const uploadSingleFile = await page.locator('button', { hasText: 'Upload Single File' })

    uploadSingleFile.click()

    const chooseFile2 = await page.waitForSelector("(//input[@type='file'])[2]")

    await chooseFile2.setInputFiles("./test-result/Screenshots/name web element screenshot.png", "Upto screen level.jpeg")

    const uploadMultipleFiles = await page.locator('button', { hasText: 'Upload Multiple Files' })

    uploadMultipleFiles.click()
});



Then('i verify all kind of waits', async function () {

    // Syntax: await page. waitForTimeout(25000) // 25000 means 25 seconds

    await page.waitForTimeout(5000) // 15000 means 15 seconds

    await page.locator("//*[text()='New Tab']").scrollIntoViewIfNeeded()

    await page.locator("//*[text()='New Tab']").click()

    await page.bringToFront()

    console.log("===================1st way of wait for selector method===============")

    //Syntax: await page. WaitForSelector(webelement) 

    await page.locator("//input[@type='file']").first().scrollIntoViewIfNeeded()

    const chooseFile1 = await page.waitForSelector("(//input[@type='file'])[1]")

    await chooseFile1.setInputFiles("./test-result/Screenshots/full page.jpeg")

    const uploadSingleFile = await page.locator('button', { hasText: 'Upload Single File' })

    uploadSingleFile.click()

    console.log("===================2nd way of wait for selector method===============")

    //Syntax: await page. WaitForSelector(webelement, {timeout:25000}) // 25000 means 25 seconds

    await page.locator("#field2").scrollIntoViewIfNeeded()

    await page.waitForSelector("#field2", { timeout: 15000 }) // 15 seconds

    await page.locator("#field2").fill("jinu")

    console.log("===================wait for load state===============")

    //Syntax: await page. waitForLoadState ()

    //1st way

    await page.waitForLoadState()

    await page.locator("#field1").fill("Testing")

    //2nd way

    await page.waitForLoadState("load")

    await page.locator("#field2").fill("Hitesh")

    //3rd way

    await page.waitForLoadState("load", { timeout: 10000 })

    await page.locator("#field1").fill("Playwright")

    //4th way

    await page.waitForLoadState("domcontentloaded")

    //5th way

    await page.waitForLoadState("networkidle")

    console.log("===================wait for Navigation===============")

    await page.goto("https://www.amazon.in/")

    //await page.waitForNavigation()

});

Then('i launch the browser and verify Windows handling', async function () {

    console.log("i launch the browser and verify Windows handling")

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"]
    })

    const context = await browser.newContext({ viewport: null })

    let page1 = await context.newPage()

    let page2 = await context.newPage()

    let page3 = await context.newPage()

    let allPagesCount = context.pages()

    console.log("allPagesCount count is ", allPagesCount.length) //allPagesCount count is  3

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.facebook.com/")

    await expect(page2).toHaveTitle("Facebook – log in or sign up")

    await page3.goto("https://testautomationpractice.blogspot.com/")

    await expect(page3).toHaveTitle("Automation Testing Practice")

    //const pageLoad = context.waitForEvent('page3')

    await page3.getByText("New Tab").scrollIntoViewIfNeeded()

    await page3.getByText("New Tab").click()

    await page3.waitForTimeout(5000)

    // const newPage = context.waitForEvent('page')

    //const newPage = await pageLoad

    allPagesCount = context.pages()

    console.log("allPagesCount count is ", allPagesCount.length) //allPagesCount count is  4

    console.log("title of the new page is :", await allPagesCount[0].title())

    console.log("title of the new page is :", await allPagesCount[3].title()) //title of the new page is : SDET-QA Blog

    // Homework : await expect(page3).toHaveTitle("Automation Testing Practice") //SDET-QA Blog

    console.log("===============switching to the first tab and enter the details=======================")

    await allPagesCount[0].bringToFront()

    await page1.getByPlaceholder('Username').fill('Admin')

    await page1.getByPlaceholder('Password').fill('admin123')

    await page1.locator("//button[@type='submit']").click()

    console.log("===============switching to the third tab and enter the details=======================")

    await allPagesCount[2].bringToFront()

    const pagePopup = page3.waitForEvent('popup')

    await page3.getByText("Popup Windows").scrollIntoViewIfNeeded()

    await page3.getByText("Popup Windows").click()

    const popupPage = await pagePopup

    console.log("title of the new popup is :", await popupPage.title())

    allPagesCount = context.pages()

    console.log("allPagesCount count is ", allPagesCount.length) //allPagesCount count is  6

    //Homework : get the title of  5 and 6th  page using allPagesCount method

    // to close any specific tab

    await page3.close()

    //Homework : get the pages count

    // to close any complete browser

    await context.close()

});

Then('i am reading the data from TestData file', async function () {

    //1st set of data

    await page.getByPlaceholder('Enter Name').fill(TestAutomationPractice.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestAutomationPractice.Email)

    await page.getByPlaceholder('Enter Phone').type(TestAutomationPractice.Phone)

    await page.locator('#textarea').type(TestAutomationPractice.Address)

    await page.locator('.wikipedia-search-input').type(TestAutomationPractice.Wikipedia)

});

Then('i am reading the data from TestData file1', async function () {

    //2nd set of data

    await page.getByPlaceholder('Enter Name').fill(TestAutomationPractice1.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestAutomationPractice1.Email)

    await page.getByPlaceholder('Enter Phone').fill(TestAutomationPractice1.Phone)

    await page.locator('#textarea').fill(TestAutomationPractice1.Address)

    await page.locator('.wikipedia-search-input').fill(TestAutomationPractice1.Wikipedia)

});

Then('i am reading the data from TestData file2', async function () {

    //3rd set of data

    await page.getByPlaceholder('Enter Name').fill(TestAutomationPractice2.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestAutomationPractice2.Email)

    await page.getByPlaceholder('Enter Phone').fill(TestAutomationPractice2.Phone)

    await page.locator('#textarea').fill(TestAutomationPractice2.Address)

    await page.locator('.wikipedia-search-input').fill(TestAutomationPractice2.Wikipedia)

});

Then('i am reading the test data {string},{string},{string},{string},{string}', async function (Name, Email, Phone, Address, Wikipedia) {

    await page.getByPlaceholder('Enter Name').fill(Name)

    await page.getByPlaceholder('Enter EMail').fill(Email)

    await page.getByPlaceholder('Enter Phone').fill(Phone)

    await page.locator('#textarea').fill(Address)

    await page.locator('.wikipedia-search-input').fill(Wikipedia)
});

Then('i verify prompt alert and enter text to the textbox', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; accept: (arg0: string) => any; }) => {

        // Verify the dialog type is 'prompt'

        expect(dialog.type()).toBe('prompt');

        // You can also assert the message if needed
       
        expect(dialog.message()).toBe('I am a JS prompt');

        // Enter the text and accept the prompt

        await dialog.accept("hi text");

        await expect(page.locator("//*[@id='result']")).toHaveText('You entered: hi text')

        console.log("===========hi team============")
    });

    await page.locator("//button[text()='Click for JS Prompt']").click()

});

Given('I have access to the Excel data {string} from sheet {string}', async function (fileName: string, sheetName: string) {
    const excelFilePath = path.join(__dirname, '../../data', fileName); // Adjust 'data' folder path
    testData = ExcelReader.readExcelFile(excelFilePath, sheetName);
});

When('I perform a search for each item in the Excel data', async function () {
    for (const dataRow of testData) {
        const searchTerm = dataRow.SearchTerm; // Assuming a column named 'SearchTerm'
        await page.locator('input[name="q"]').fill(searchTerm);
        await page.locator('input[name="btnK"]').click();
        // Add assertions or further actions here
    }
});
















