
import loginPage from "../pageobjects/LoginPage.js";
import homePage from "../pageobjects/homePage.js";
import customFurniturePage from "../pageobjects/customFurniturePage.js";
import miniCartPage from "../pageobjects/miniCartPage.js";
import myCartPage from "../pageobjects/myCartPage.js";
import checkOutPage from "../pageobjects/checkOutPage.js";

describe("Psquare Website End-To-End Flow ",() => {

    it("Load Url of the  website",async() => {

        await loginPage.loadUrl();
        await loginPage.$psquareheader().waitForDisplayed({ timeout: 5000 });
        expect(await loginPage.$psquareheader().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue(); 
    
})

it("Login the user into the Psqaure Application",async() =>
{
    await loginPage.Login();
    browser.pause(5000);
    await loginPage.$psquareLoginText().waitForDisplayed({timeout : 5000});
    expect(await loginPage.$psquareLoginText().isDisplayed())
    .withContext("The text 'Happiness Inside since 1997' is to be displayed").toBeTrue();

})

it("Click on the 'More' option to select the 'Custom Furniture' option",async() =>
    {
        await homePage.openCustomFurniture();
        browser.pause(5000);
       
    
    })

it("Click on the 'More' option to select the 'Custom Furniture' option",async() =>{

    browser.pause(5000);
    await customFurniturePage.chooseCustomFurniture();

})

it("The proceed to checkout process on the Mini Cart",async() =>{

    browser.pause(5000);
    await miniCartPage.proceedToPurchase()

})

it("The proceed to checkout process on MyCart Page",async() =>{

    browser.pause(5000);
    await myCartPage.proceedToCheckoutOnMyCart()

})

// it("Enter Checkout Details",async() =>{

//     await checkOutPage.checkoutProcess()
    

// })

// it("Enter Checkout Details",async() =>{

//     await checkOutPage.clickCheckoutButton()
    

// })

})
