import Base_PO from './Base_PO';

class CompraEntrega_PO extends Base_PO {
    get city(){
        return $('#c1ty');
    }
    get suggestionCity(){
        return $('.gb-suggestion');
    }
    clickSuggestionCity(){
        this.suggestionCity.click();
    }
    get retiroSucursal(){
        return $('.gb-checkout-delivery-popup-success');
    }
    clickRetiroSucursal(){
        this.retiroSucursal.waitForDisplayed({ timeout: 3000 });
        this.retiroSucursal.click();
    }
    get seleccionarSucursal(){
        return $('.sucursal-ul-list');
    }
    clickSeleccionarSucursal(){
        browser.takeScreenshot()
        this.seleccionarSucursal.waitForDisplayed({ timeout: 3000 });
        this.seleccionarSucursal.click();
    }
    get continuarPickUpButton(){
        return $('#continue-pickup');
    }
    clickContinuarPickUpButton(){
        this.continuarPickUpButton.click();
    }
}
export default new CompraEntrega_PO()