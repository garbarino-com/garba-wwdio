const assert = require('assert');

describe('Test webdriveruni homepage', () => {
    it('Validar si el titulo de la pagina principal de webdriver uni es correcto',() => {
        browser.url('./');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebDriverUniversity.com');

        browser.pause(3000); 
    })
})