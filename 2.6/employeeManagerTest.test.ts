import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class emPage {
      driver: WebDriver;
      static url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST

        static header: By = By.css(".titleBar");
        static addEmployee: By = By.name("addEmployee");
        static newEmployee: By = By.name("employee11");
        static nameInput: By = By.name("nameEntry");
        static phoneInput: By = By.name("phoneEntry");
        static titleInput: By = By.name("titleEntry");
        static saveBtn: By = By.id("saveBtn");

        constructor (driver: WebDriver) {
            this.driver = driver;
        };
        static async navigate() {
            await driver.get(this.url);
        };
  };

  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      });
      afterAll(async () => {
          await driver.quit()
      });
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.header));
          await driver.findElement(emPage.addEmployee).click();
          await driver.findElement(emPage.newEmployee).click();
          await driver.findElement(emPage.nameInput).click();
          await driver.findElement(emPage.nameInput).clear();
          await driver.findElement(emPage.nameInput).sendKeys("Guy Smiley");
          await driver.findElement(emPage.phoneInput).click();
          await driver.findElement(emPage.phoneInput).clear();
          await driver.findElement(emPage.phoneInput).sendKeys("18004561234");
          await driver.findElement(emPage.titleInput).click();
          await driver.findElement(emPage.titleInput).clear();
          await driver.findElement(emPage.titleInput).sendKeys("CEO of Smiles");
          await driver.findElement(emPage.saveBtn).click();
  });

  /* I didn't have the 2.6 code along before working on this, so I found some work arounds...
  first was changing the class from emplployeePage to emPage so the test could find it,
  then it wouldn't recognize the "const" for the selectors, with a little research I found the "static" method,
  which I figured would be alright since it's a static webpage... the constructor and the async navigate
  I remebered from class but it took minute to figure out the right format.
  Then through many failed test runs I realized the url:string and the async navigate needed to be static to link up as well! 

  I also struggle with finding the CSS for selectors and Xpath is really confusing but I think it will come with time and practice...
  Aslo struggle with the concept of structuring an entire test like this, knowing what order everything goes in, and what goes these parantheses,
  what goes between these brackets, but I'm sure that comes with time and practice as well...
  I have learned though that the basic structure of a function, function name(parameter) aurgument {test} is used in what seems more then anything so that helps! 
    */
});