describe("Iframe example", () => {
    beforeEach(function() {
      browser.url("./IFrame/index.html");
    });
  
    it("Test de clicking of a given button housed witin a iframe", () => {

        const iframe = $("#frame");
        browser.switchToFrame(iframe);

        const findOutMore_Button = $("//nav[@id='div-main-nav']//ul[@class='nav navbar-nav']//a[@href='products.html']");
        findOutMore_Button.waitForDisplayed();
        findOutMore_Button.click();
        browser.pause(3000);
    }); 
  });
  