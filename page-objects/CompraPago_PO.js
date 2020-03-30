import Base_PO from './Base_PO';

class CompraPago_PO extends Base_PO {
    get formFacturacion(){
        return $('#gb-checkout');
    }
    clickFormFacturacion(){
        this.formFacturacion.click();
    }
    get cardNumber(){
        //return $('#card_number');
        return $('#card_number')
    }
    get cardExpirationMonth(){
        return $('#card_expiration_month');
    }
    get cardExpirationAnio(){
        return $('#card_expiration_year')
    }
    get securityCode(){
        return $('#security_code')
    }
    get buttonComprarFinal(){
        return $('#sendForm');
    }
    clickButtonComprarFinal(){
        this.buttonComprarFinal.click();
    }
}
export default new CompraPago_PO()