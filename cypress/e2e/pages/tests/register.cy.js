import { Logger } from "../../util/logger"
import { CommonPageData } from "../common-page/common-page.data"
import { CommonPageMethods } from "../common-page/common-page.methods"
import { LoginData } from "../login/login.data"
import { SignUpMethods } from "../sign-up/sign-up.methods"

describe(CommonPageData.testSuites.register,()=>{
    it("Register of valid user",()=>{
        const username = CommonPageMethods.generateRandomString()
        const password = CommonPageMethods.generateRandomString()

        Logger.stepNumber(1)
        Logger.step("Navigate to the homepage")
        CommonPageMethods.navigateToTheApplication()

        Logger.stepNumber(2)
        Logger.step("Click on Sign Up in the toolbar")
        CommonPageMethods.clickOnSignUpOption()

        Logger.stepNumber(3)
        Logger.step("Fill the fields with valid data")
        SignUpMethods.insertUserName(username)
        SignUpMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step("Click on the Sign Up button")
        SignUpMethods.clickOnSignUpButton()
        Logger.verification("Verify the successful alert")
        SignUpMethods.verifySignupSuccessfulMessageIsDisplayed()
    })
    it("Register of invalid user",()=>{
        const existentUsername = LoginData.credentials.username
        const password = CommonPageMethods.generateRandomString()

        Logger.stepNumber(1)
        Logger.step("Navigate to the homepage")
        CommonPageMethods.navigateToTheApplication()

        Logger.stepNumber(2)
        Logger.step("Click on Sign Up in the toolbar")
        CommonPageMethods.clickOnSignUpOption()

        Logger.stepNumber(3)
        Logger.step("Fill the fields with invalid data")
        SignUpMethods.insertUserName(existentUsername)
        SignUpMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step("Click on the Sign Up button")
        SignUpMethods.clickOnSignUpButton()
        Logger.verification("Verify the unsuccessful alert")
        SignUpMethods.verifyUserAlreadyExistMessageIsDisplayed()
    })
})