import CommonPage from "./CommonPage.js";
class miniCartPage extends CommonPage
{
    constructor()
    {
        super();
        this.$chooseBookShelf=()=> $('//h4[text()="Spacechamp Engineered Wood Kids Bookshelf In Green Colour"]')
        this.$proceedToCartButton=()=>$('//button[@aria-label="Proceed to cart"]')
       
        
      

    }
    /**
     * This function is to click on the 'More' option and then select the 'Custom Furniture' option
     */

    async proceedToPurchase()
    {
        await this.$proceedToCartButton().click()
    }


   
}



    

export default new miniCartPage();