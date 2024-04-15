import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnProductName(productName){
        HomeElements.elements.productLink(productName).click()
    }
}