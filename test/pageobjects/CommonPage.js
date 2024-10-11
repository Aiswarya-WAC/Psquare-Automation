export default class CommonPage 
{
    constructor()
    {
  

    }


    /**
     * Load the url of the website
     */

    async loadUrl()
    {
        await browser.url('https://qa.psquare-interiors.webc.in/')
        browser.maximizeWindow();

    }
}