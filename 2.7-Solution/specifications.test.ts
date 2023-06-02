import { SpecPage } from "./SpecPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new SpecPage(driver);

test("it works", async () => {
  await page.navigate();
  await page.doSearch("purple drink");
  expect(await page.getResults()).toContain("purple drink");
});

afterAll(async () => {
  await driver.quit();
});