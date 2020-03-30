import { AssertionError } from "assert";
const assert = require('assert');
var config = require('../config/main-config.js')
var dataGenerators = require('../utils/dataGenerators.js')

//https://webdriver.io/docs/api/webdriver.html#switchtoframe
describe("Test conctact us page", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("./");
      browser.pause(2000);

      const pageDetails = browser.getUrlAndTitle();
      expect(pageDetails.url).to.contain('webdriveruniversity');
      expect(pageDetails.title).to.contain('WebDriverUniversity');
    });

    it("Submit all information via contact us page", () => {

        //const contacButton = $('#contact-us');
        //contacButton.click();

         browser.waitAndClick('#contact-us');

        browser.switchWindow('WebDriver | Contact Us');

        //get inputs 
        //const name = $("[name='first_name']");
        //browser.pause(1000);
        //const lastName = $("[name='last_name']");
        //const email = $("[name='email']");
        //const message = $("[name='message']");

        //fill input
        //name.setValue(config.firstName);
        //lastName.setValue(config.lastName);
        //email.setValue("jonathanrojas31@gmail.com");
        //message.setValue("Vamos avanzando grandemente");
        browser.pause(2000);

        browser.waitAndSendKeys("[name='first_name']", config.firstName); //ver porque tengo que poner pause para que pueda llenar el campo
        browser.pause(4000)
        browser.waitAndSendKeys("[name='last_name']", config.lastName);
        browser.waitAndSendKeys("[name='email']", dataGenerators.generateRandomEmailAddress());
        browser.waitAndSendKeys("[name='message']", dataGenerators.generateRandomString());

        browser.pause(4000);

        //click on the submit button
        //const submitButton = $("//div[@id='form_buttons']/input[@value='SUBMIT']");
        browser.waitAndClick("//div[@id='form_buttons']/input[@value='SUBMIT']");

        //submitButton.click();

        //make sure URL contains the correct text
        const messageUrl = browser.getUrl();
        assert.strictEqual(messageUrl, 'http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');


        browser.pause(4000);
    }); 
  });