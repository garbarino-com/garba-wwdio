//const assert = require('assert');

describe('Selectors test', () => {
    //ejecutar la url para cada prueba antes 
    beforeEach(function(){
        browser.setWindowSize(1800,1200);
        browser.url('./');
    })

    it('By Id',() => {
        const clickById = $('#contact-us');
        clickById.click();
    })

    it('By Class',() => {
        const clickByClass = $('.section-title');
        clickByClass.click();
    })

    it('By XPATH',() => {
        const clickByXpath = $("//h1[text()='CONTACT US']/../..");
        clickByXpath.click();
    })

    it('By CSS',() => {
        const clickByCss = $('#contact-us h1');
        clickByCss.click();
    })
})