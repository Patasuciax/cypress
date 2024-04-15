import { CartMethods } from "../cart/cart.methods"
import { CommonPageMethods } from "../common-page/common-page.methods"
import { HomeData } from "../home/home.data"
import { HomeMethods } from "../home/home.methods"
import { LoginMethods } from "../login/login.methods"
import { PlaceOrderData } from "../place-order/place-order.data"
import { PlaceOrderMethods } from "../place-order/place-order.methods"
import { ProductDetailsMethods, ProductMethods } from "../product-details/product-details.methods"
import { PurchaseMethods } from "../purchase/purchase.methods"
import { SignUpMethods } from "../sign-up/sign-up.methods"

describe('Place order',()=>{
    it("Place order with newly created user account",()=>{
        const username = CommonPageMethods.generateRandomString()
        const password = CommonPageMethods.generateRandomString()
        const productName = HomeData.phones.nexus6
        const orderTestData = PlaceOrderData.testData

        CommonPageMethods.navigateToTheApplication()
        SignUpMethods.createUserAccount(username,password)
        LoginMethods.login(username,password)

        CommonPageMethods.clickOnHomePage()
        HomeMethods.clickOnProductLink(productName)
        ProductDetailsMethods.clickOnAddToCartButton()

        CommonPageMethods.clickOnCartOption()
        CartMethods.clickOnPlaceOrderButton()
        PlaceOrderMethods.insertName(orderTestData.name)
        PlaceOrderMethods.insertCountry(orderTestData.country)
        PlaceOrderMethods.insertCity(orderTestData.city)
        PlaceOrderMethods.insertCreditCard(orderTestData.creditCard)
        PlaceOrderMethods.insertMonth(orderTestData.month)
        PlaceOrderMethods.insertYear(orderTestData.year)
        PlaceOrderMethods.clickOnPurchaseButton()
        PurchaseMethods.verifyPurchaseSuccesful()
    })
})