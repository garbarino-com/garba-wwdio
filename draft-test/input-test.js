describe("Injects javascript into the target website", () => {
    beforeEach(function() {
      browser.url("./");
    });
  
    it("Test de contact us page", () => {

        const contacUsButton = $('#contact-us');
        contacUsButton.click();

        browser.switchWindow('WebDriver | Contact us');

        const inputName = $("[name='first_name']")
        inputName.waitForDisplayed();
        inputName.addValue("Agregar un nombre");
        browser.pause(5000);

        inputName.clearValue();
        browser.pause(2000);

        inputName.setValue("Carlos calvo");
        browser.pause(2000);

    }); 
  });
  