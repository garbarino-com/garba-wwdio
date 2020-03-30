import Base_PO from './Base_PO';

class Producto_PO extends Base_PO {
    get purchaseButton(){
        return $('#purchaseButton');
    }
    clickPurchaseButton(){
        this.purchaseButton.click();
    }
    get continuarCarritoButton(){
        return $('#cart-buy-btn'); 
    }
    clickContinuarCarritoButton(){
        this.continuarCarritoButton.click();
    }
}
export default new Producto_PO()