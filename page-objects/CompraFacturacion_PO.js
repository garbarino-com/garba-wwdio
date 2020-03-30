import Base_PO from './Base_PO';

class CompraFacturacion_PO extends Base_PO {
    // open() {
    //     super.open('/compra/facturacion');
    // }
    get firstName(){
        return $('#firstName');
    }
    get lastName(){
        return $('#lastName');
    }
    get documento(){
        return $('#id_value');
    }
    get diaNacimiento(){
        return $('#day_select');
    }
    get mesNacimiento(){
        return $('#month_select');
    }
    get anioNacimiento(){
        return $('#year_select');
    }
    get selectGenero(){
        return $('.item-genero');
    }
    clickSelectGenero(){
        this.selectGenero.click();
    }
    get codigoArea(){
        return $('#codphone');
    }
    get numeroTelefono(){
        return $('#phone');
    }
    get email(){
        return $('#email');
    }
    get calle(){
        return $('#street_name');
    }
    get altura(){
        return $('#street_number');
    }
    get piso(){
        return $('#floor');
    }
    get apartamento(){
        return $('#room');
    }
    get codigoPostal(){
        return $('#zip_code');
    }
    get aceptoTerminos(){
        return $('.acepto-terminos');
    }
    clickAceptoTerminos(){
        this.aceptoTerminos.click();
    }
    get buttonContinue(){
        return $('#continue');
    }
    clickButtonContinue(){
        this.buttonContinue.click();
    }
}
export default new CompraFacturacion_PO()