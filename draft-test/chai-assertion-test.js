describe('Chai assertion', () => {
    //ejecutar la url para cada prueba antes 
    beforeEach(function(){
        browser.setWindowSize(1800,1200);
        browser.url('./');
    })

    it('Test login portal',() => {
        const clickById = $('#login-portal');
        clickById.click();

        browser.switchWindow('WebDriver | Login Portal')

        const loginPageTitle = browser.getTitle();
        const loginUrl = browser.getUrl();

        expect(loginPageTitle).to.contains('Login Portal');
        expect(loginUrl).to.contains('Login-Portal');
    })
})