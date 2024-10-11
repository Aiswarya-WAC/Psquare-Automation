import CommonPage from "./CommonPage.js";
class checkOutPage extends CommonPage
{
    constructor()
    {
        super();
        this.$checkoutButtonOnMyCart=()=> $('(//button[@aria-label="Checkout"])[1]')
        this.$houseNumber=()=>$('//input[@name="company"]')
        this.$street=()=>$('//input[@name="street"]')
        this.$town=()=>$('//input[@name="city"]')
        this.$pincodeButton=()=>$('//button[@type="button"]//span[text()="Pin Code*"]')
        this.$choosepincode=()=>$('//button[text()="680308"]')
        this.$landmark=()=>$('//input[@name="landmark"]')
        this.$typeOfAddress=()=>$('//input[@id="Type of Address_1"]')
        this.$addAddressButton=()=>$('//button[@aria-label="Add address"]')
        this.$checkoutButton=()=>$('//button[@aria-label="Checkout"]')
        this.$clickCheckbox=()=>$('//input[@id="1"]')
        this.$clickCheckoutContinue=()=>$('//button[@aria-label="Proceed to payment"]')
  
       
        
      

    }
    /**
     * This function is to click on the 'More' option and then select the 'Custom Furniture' option
     */

    async checkoutProcess()
    {
        await this.$clickCheckbox().click()
        await this.$checkoutButtonOnMyCart().click()
        
    }

    async clickCheckoutButton()
    {
      await this.$clickCheckoutContinue().click()
    }

    // async enterCheckoutDetails()
    // {
    //     await this.$houseNumber().setValue("123 A Skyline");
    //     await this.$street().setValue("Prince Nagar");
    //     await this.$town().setValue("Kochi");
    //     await this.$choosepincode().click();
    //     await this.$landmark().setValue("Near Sunrise Hospital");
    //     await this.$typeOfAddress().click();
    //     await this.$addAddressButton().click();
    // }

   
}



    

export default new checkOutPage();