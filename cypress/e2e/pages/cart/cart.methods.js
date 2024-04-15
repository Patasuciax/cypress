import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }
    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click()
    }
}