import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.textboxes.name.type(name)
    }
    static insertCountry(country){
        PlaceOrderElements.textboxes.country.type(country)
    }
    static insertCity(city){
        PlaceOrderElements.textboxes.city.type(city)
    }
    static insertCreditCard(creditcard){
        PlaceOrderElements.textboxes.creditCard.type(creditcard)
    }
    static insertMonth(month){
        PlaceOrderElements.textboxes.month.type(month)
    }
    static insertYear(year){
        PlaceOrderElements.textboxes.year.type(year)
    }
    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click()
    }
}