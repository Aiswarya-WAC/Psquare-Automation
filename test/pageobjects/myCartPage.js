import CommonPage from "./CommonPage.js";
class miniCartPage extends CommonPage
{
    constructor()
    {
        super();
        this.$checkoutButtonOnMyCart=()=> $('(//button[@aria-label="Checkout"])[1]')
  
       
        
      

    }
    /**
     * This function is to click on the 'More' option and then select the 'Custom Furniture' option
     */

    async proceedToCheckoutOnMyCart()
    {
        await this.$checkoutButtonOnMyCart().click()
    }


   
}



    

export default new miniCartPage();