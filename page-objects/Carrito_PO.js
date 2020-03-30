import Base_PO from './Base_PO';

class Carrito_PO extends Base_PO {
    get continuarCarritoButton(){
        return $('#cart-buy-btn'); 
    }
    clickContinuarCarritoButton(){
        this.continuarCarritoButton.click();
    }
}
export default new Carrito_PO()