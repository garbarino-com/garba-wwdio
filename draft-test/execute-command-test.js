describe("Injects javascript into the target website", () => {
    beforeEach(function() {
      browser.url("./");
    });
  
    it("Change webdriveruni backgroundcolor", () => {

        browser.execute(() => {
            return document.body.style.background = "red";
        });
    }); 
  });
  