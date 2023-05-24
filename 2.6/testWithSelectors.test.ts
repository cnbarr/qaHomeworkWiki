import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.name("hdrInput");
    const mkeInput: By = By.name("mkeInput");
    const oaiInput: By = By.name("oriInput");
    const nameInput: By = By.name("namInput");
    const clrBtn: By = By.id("clearBtn");
    const submitBtn: By = By.id("saveBtn");
    const errorMsg: By = By.css('p#validHeader'); 

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("did it work");
        await driver.findElement(mkeInput).sendKeys("123456789");
        await driver.findElement(oaiInput).sendKeys("5150911187");
        await driver.findElement(nameInput).sendKeys("Scuba Steve");
        await driver.findElement(submitBtn).click();
        const errorElement = await driver.findElement(errorMsg);
        const errorText = await errorElement.getText();
        expect(errorText).toContain("Errors Received:");
        await driver.findElement(clrBtn).click();
        
    });
}); /*This one was a little tricky as well to get the error msg to pull the text value out of the validHeader,
I had to find a write a couple new lines of code to make it work " const errorElement = await driver.findElement(errorMsg);
        const errorText = await errorElement.getText();"
also there was an "async" missing in the test that threw me off as well*/