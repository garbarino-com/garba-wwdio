import Base_PO from './Base_PO';

class CompraFinanciacion_PO extends Base_PO {
    open() {
        super.open('/compra/financiacion');
    }
    get formMetodosPago(){
        return $('#metodos-pago');
    }
    clickFormMetodosPago(){
        this.formMetodosPago.click()
    }
    get seleccionarTarjetaDebito(){
        return $('#gb-tarjeta-visa-debito');
    }
    clickSeleccionarTarjetaDebito(){
        this.seleccionarTarjetaDebito.click();
    }
    get seleccionarTarjetaCreditoVisa(){
        return $('//li[@id="gb-tarjeta-visa"]/label[@title="Visa"]');
    }
    clickSeleccionarTarjetaCreditoVisa(){
        this.seleccionarTarjetaCreditoVisa.click();
    }
    get seleccionarVisaTodosBancos18Cuotas(){
        const visa18Cuotas = $('//*[@id="metodos-pago"]/fieldset[2]/ul/li[3]/label')
        return visa18Cuotas;
    }
    clickSeleccinarVisaTodosBancos18Cuotas(){
        this.seleccionarVisaTodosBancos18Cuotas.click();
    }
    get cantidadCuotas() {
        const cuotas = $('/html/body/main/div/div[1]/section[2]/div/form/fieldset[5]/div/div[1]/select/option[2]');
        return cuotas;
    }
    clickCantidadCuotas() {
        //browser.takeScreenshot()
        this.cantidadCuotas.waitForDisplayed({ timeout: 3000 });
        this.cantidadCuotas.click();
    }
    get presionarContinuarButtonMedioPago(){
        return $('#continue');
    }
    clickPresionarContinuarButtonMedioPago(){
        browser.takeScreenshot()
        this.presionarContinuarButtonMedioPago.waitForDisplayed({ timeout: 3000 });
        this.presionarContinuarButtonMedioPago.click();
    }
}
export default new CompraFinanciacion_PO()