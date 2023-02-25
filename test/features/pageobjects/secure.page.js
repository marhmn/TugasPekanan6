

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('.chakra-alert');
    }

    get Container (){
        return $('//*[@id="root"]/div/div/div[1]/div/h3');
    }
}

export default new SecurePage();
