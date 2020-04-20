import Base_PO from './Base_PO';

class CompraEntrega_PO extends Base_PO {
    get city(){
        return $('#c1ty');
    }
    get suggestionCity(){
        return $('.gb-suggestion');
    }
    clickSuggestionCity(){
        //browser.takeScreenshot()
        this.suggestionCity.waitForDisplayed({ timeout: 3000 });
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
    get envioDomicilio(){
        return $('.gb-checkout-delivery-popup-warning');
    }
    clickEnvioDomicilio(){
        this.envioDomicilio.waitForDisplayed({ timeout: 3000 });
        this.envioDomicilio.click();
    }
    get continuarPickUpButton(){
        return $('#continue-pickup');
    }
    clickContinuarPickUpButton(){
        this.continuarPickUpButton.click();
    }
    // Formulario de envío a domicilio
    get calle() {
        return $('#street_name');
    }
    get altura() {
        return $('#street_number');
    }
    get piso(){
        return $('#floor');
    }
    get apartamento(){
        return $('#room');
    }
    get entreCalle1(){
        return $('#between_street_1')
    }
    get entreCalle2(){
        return $('#between_street_2')
    }
    get codigoPostal(){
        return $('#zip_code');
    }
    get codigoArea(){
        return $('#codphone');
    }
    get numeroTelefono(){
        return $('#phone');
    }
    get fechaCalendario(){
        return $('.selectDay');
    }
    clickFechaCalendario(){
        this.fechaCalendario.click();
    }
    get continuarDomicilioButton(){
        return $('#continue')
    }
    clickContinuarDomicilioButton(){
        this.continuarDomicilioButton.click();
    }
}
export default new CompraEntrega_PO()