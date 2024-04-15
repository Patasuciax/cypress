import { Logger } from "../../util/logger"
import { CommonPageData } from "../common-page/common-page.data"
import { CommonPageMethods } from "../common-page/common-page.methods"
import { LoginData } from "../login/login.data"
import { LoginMethods } from "../login/login.methods"
import { SignUpMethods } from "../sign-up/sign-up.methods"

describe(CommonPageData.testSuites.authentication,()=>{
    it("Authentication with valid user",()=>{
        const username = LoginData.credentials.username
        const password = LoginData.credentials.password

        Logger.stepNumber(1)
        Logger.step("Navigate to the homepage")
        CommonPageMethods.navigateToTheApplication()

        Logger.stepNumber(2)
        Logger.step("Click on Login in the toolbar")
        CommonPageMethods.clickOnLoginOption()

        Logger.stepNumber(3)
        Logger.step("Fill the fields with valid data")
        LoginMethods.insertUsername(username)
        LoginMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step("Click on the Login button")
        LoginMethods.clickOnLogin()
        Logger.verification("Verify that the user is logged")
        CommonPageMethods.verifySignedUser(username)
    })
    it("Authentication with invalid user",()=>{
        const username = LoginData.credentials.username
        const password = CommonPageMethods.generateRandomString()

        Logger.stepNumber(1)
        Logger.step("Navigate to the homepage")
        CommonPageMethods.navigateToTheApplication()

        Logger.stepNumber(2)
        Logger.step("Click on Login in the toolbar")
        CommonPageMethods.clickOnLoginOption()

        Logger.stepNumber(3)
        Logger.step("Fill the fields with invalid data")
        LoginMethods.insertUsername(username)
        LoginMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step("Click on the Sign Up button")
        LoginMethods.clickOnLogin
        Logger.verification("Verify the unsuccessful alert")
        LoginMethods.verifyWrongPasswordMessageIsDisplayed()
    })
})