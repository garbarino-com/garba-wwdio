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
        return $('#tarjeta-visa')
    }
    clickSeleccionarTarjetaCreditoVisa(){
        this.seleccionarTarjetaCreditoVisa.click(); //form[@id='metodos-pago']/fieldset[@class='payment-methods']/ul/li[2]/label
    }
    get seleccionarVisaTodosBancos18Cuotas(){
        return $('//form[@id="metodos-pago"]/fieldset[@class="payment-methods"]/ul/li[3]/label')
    }
    clickSeleccinarVisaTodosBancos18Cuotas(){
        this.seleccionarVisaTodosBancos18Cuotas.click();
    }
    get presionarContinuarButtonMedioPago(){
        return $('#continue');
    }
    clickPresionarContinuarButtonMedioPago(){
        this.presionarContinuarButtonMedioPago.click();
    }
}
export default new CompraFinanciacion_PO()