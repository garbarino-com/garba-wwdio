import Base_PO from './Base_PO';

class Producto_PO extends Base_PO {
    get purchaseButton(){
        const purchaseButton = $('#purchaseButton');
        return purchaseButton;
    }
    clickPurchaseButton(){
        browser.takeScreenshot()
        this.purchaseButton.click();
    }
    get continuarCarritoButton(){
        const cartBuyBtn = $('#cart-buy-btn');
        return cartBuyBtn; 
    }
    clickContinuarCarritoButton(){
        browser.takeScreenshot()
        this.continuarCarritoButton.click();
    }
}
export default new Producto_PO()