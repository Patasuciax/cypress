import { ProductElements } from "./product.elements";

export class ProductMethods{
    static clickOnAddToProductButton(){
        ProductElements.elements.addToCartButton.click()
    }
}