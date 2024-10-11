import CommonPage from "./CommonPage.js";
class CustomFurniturePage extends CommonPage
{
    constructor()
    {
        super();
        this.$chooseBookShelf=()=> $('//h4[text()="Spacechamp Engineered Wood Kids Bookshelf In Green Colour"]')
        this.$clickOnMore=()=> $('//span[text()="More"]')
        this.$clickOnCustomFurniture=()=> $('//a[@aria-label="Custom Furniture"]')
        this.$addToCartButton=()=> $('//button[text()="Add to Cart"]')
        this.$addPincode=()=>$('//input[@name="pincode"]')
        this.$clickOnCheckPincode=()=>$('//button[@aria-label="Check"]')
        this.$cartIcon=()=>$('//button[@aria-label="Go to cart"]')
       
        
      

    }
    /**
     * This function is to click on the 'More' option and then select the 'Custom Furniture' option
     */

    async chooseCustomFurniture()
    {
        await this.$chooseBookShelf().click();
        await this.$addPincode().setValue('689126')
        await this.$clickOnCheckPincode().click();
        await this.$addToCartButton().click();
        await this.$cartIcon().click()
    }


   
}



    

export default new CustomFurniturePage();